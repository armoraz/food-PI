const { Diet, Recipe, RecipeDiet } = require("../db");

const postRecipeController = async function (req, res) {
  const { name, instructions, healthScore, summary, diets } = req.body;
  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      instructions,
    });

    diets.forEach(async (element) => {
      const dietRow = await Diet.findOne({ where: { name: `${element}` } });
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
