const { getRecipesController } = require("./getRecipes");
const { getDietsController } = require("./getDiets");
const { getRecipeController } = require("./getRecipe");
const { postDietsController } = require("./postDiets");
const { postRecipeController } = require("./postRecipe");
const { searchRecipeController } = require("./searchRecipes");

module.exports = {
  getRecipesController,
  searchRecipeController,
  getRecipeController,
  postRecipeController,
  getDietsController,
  postDietsController,
};
