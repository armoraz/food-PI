const { Diet, Recipe, RecipeDiet } = require("../db");

function isStringOk(data) {
  if (typeof data !== "string")
    throw new Error(`INPUT_ERROR: ${data} is not a String`);
  if (data.trim() === "")
    throw new Error(`INPUT_ERROR: ${data} cannot be empty`);
}

function isArrayOk(data) {
  if (typeof data !== "object")
    throw new Error(`INPUT_ERROR: ${data} is not an Array`);
  if (data.length < 1) throw new Error(`INPUT_ERROR: ${data} cannot be empty`);
}

const postRecipeController = async function (req, res, next) {
  const { name, instructions, healthScore, summary, diets } = req.body;
  try {
    isStringOk(name);
    isStringOk(summary);
    isArrayOk(instructions);
    isArrayOk(diets);
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      instructions,
    });

    await diets.forEach(async (element) => {
      const dietRow = await Diet.findOne({ where: { name: `${element}` } });
      if (dietRow === null) throw new Error("Missing diet from database");
      await newRecipe.addDiet(dietRow, { through: RecipeDiet });
    });

    res.json({ message: "Receta creada" });
  } catch (e) {
    //Error info recibida
    if (e.message.includes("INPUT_ERROR")) {
      e.status = 400;
      next(e);
    } else next(e);
  }
};

module.exports = {
  postRecipeController,
};
