const { Recipe } = require("../db");

const getAllRecipesController = async function (req, res, next) {
  if (req.query.name) next();
  else {
    try {
      const recipes = await Recipe.findAll();
      res.json(recipes.length ? recipes : "No recipes found");
    } catch (e) {
      res.send("error at getting all recipes", e.message);
    }
  }
};

module.exports = {
  getAllRecipesController,
};
