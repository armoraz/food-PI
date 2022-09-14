const { getAllRecipesController } = require("./getAllRecipes");
const { getDietsController } = require("./getDiets");
const { getRecipeController } = require("./getRecipe");
const { postDietsController } = require("./postDiets");
const { postRecipeController } = require("./postRecipe");
const { searchRecipeController } = require("./searchRecipes");

module.exports = {
  getAllRecipesController,
  searchRecipeController,
  getRecipeController,
  postRecipeController,
  getDietsController,
  postDietsController,
};
