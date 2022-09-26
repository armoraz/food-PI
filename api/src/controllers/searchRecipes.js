require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");

const searchRecipeController = async function (req, res) {
  const { name } = req.query;

  try {
    //Busqueda en la API
    const searchedRecipesAPI = [];
    //Por si la API esta caida
    // try {
    //   const response = await axios.get(
    //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`
    //   );

    //   response.data.results.map((e) => {
    //     searchedRecipesAPI.push({
    //       id: e.id,
    //       name: e.title,
    //       img: e.image,
    //       healthScore: e.healthScore,
    //       diets: e.diets,
    //     });
    //   });
    // } catch (e) {
    //   searchedRecipesAPI.push({ ERROR_API: e.message });
    // }
    //Busqueda en la DB
    const recipesDB = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}`,
        },
      },
      include: Diet,
    });

    const searchedRecipesDB = recipesDB.map((r) => {
      return {
        id: r.id,
        name: r.name,
        img: r.img ? r.img : "https://i.redd.it/t9y87m5f0pz41.jpg",
        healthScore: r.healthScore,
        diets: r.diets.map((element) => {
          return element.name;
        }),
      };
    });

    const searchedRecipes = [...searchedRecipesDB, ...searchedRecipesAPI];
    res.json(searchedRecipes);
  } catch (e) {
    res.json("error at searching recipes: " + e.message);
  }
};

module.exports = {
  searchRecipeController,
};
