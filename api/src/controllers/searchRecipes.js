require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");

const searchRecipeController = async function (req, res) {
  const { name } = req.query;

  try {
    //Busqueda en la API
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`
    );
    const searchedRecipesAPI = [];
    response.data.results.map((e) => {
      searchedRecipesAPI.push({
        name: e.title,
        img: e.image,
        summary: e.summary,
        diets: e.diets,
        instructions: e.analyzedInstructions,
      });
    });
    //Busqueda en la DB
    const searchedRecipesDB = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}`,
        },
      },
    });
    const searchedRecipes = [...searchedRecipesAPI, ...searchedRecipesDB];
    res.json(searchedRecipes);
  } catch (e) {
    res.send("error at searching recipes", e.message);
  }
};

module.exports = {
  searchRecipeController,
};
