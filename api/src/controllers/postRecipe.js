const { Diet, Recipe, RecipeDiet } = require("../db");

function isStringOk(data) {
  if (typeof data !== "string") throw new Error(`${data} is not an String`);
  if (data.trim() === "") throw new Error(`${data} cannot be empty`);
  return true;
}

function isArrayOk(data) {
  if (typeof data !== "object") throw new Error(`${data} is not an Array`);
  if (data.length < 1) throw new Error(`${data} cannot be empty`);
}

const postRecipeController = async function (req, res) {
  const { name, instructions, healthScore, summary, diets } = req.body;
  try {
    // isStringOk(name);
    // isStringOk(summary);
    isArrayOk(instructions);
    // isArrayOk(diets);

    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      instructions,
    });

    diets.forEach(async (element) => {
      const dietRow = await Diet.findOne({ where: { name: `${element}` } });
      if (dietRow === null) throw new Error("Missing diet from database");
      await newRecipe.addDiet(dietRow, { through: RecipeDiet });
    });

    res.json(newRecipe);
  } catch (e) {
    res.send("error at posting recipe", e.message);
  }
};

module.exports = {
  postRecipeController,
};
