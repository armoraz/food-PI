require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { Op } = require("sequelize");

const getRecipeController = async function (req, res, next) {
  const id = req.params.id;
  const recipe = [];

  try {
    if (id.includes("-")) {
      //Busqueda en DB
      const rDB = await Recipe.findOne({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
        include: Diet,
      });

      //Formateando
      const recipeDB = {
        id: rDB.id,
        name: rDB.name,
        img: rDB.img
          ? rDB.img
          : "https://images.unsplash.com/photo-1623691752472-a6d33855e5de",
        summary: rDB.summary,
        healthScore: rDB.healthScore,
        instructions: rDB.instructions,
        diets: rDB.diets.map((element) => {
          return element.name;
        }),
      };

      recipe.push(recipeDB);
    } else {
      //Busqueda en API
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );

      if (response.data.code === 404)
        throw new Error(`Recipe id: ${id} does not exist`);

      const recipeAPI = {
        id: response.data.id,
        name: response.data.title,
        img: response.data.image,
        summary: response.data.summary.replace(/(<([^>]+)>)/gi, ""),
        healthScore: response.data.healthScore,
        diets: response.data.diets,
        instructions: response.data.analyzedInstructions.length
          ? response.data.analyzedInstructions[0].steps
          : [],
      };

      recipe.push(recipeAPI);
    }
    res.json(...recipe);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getRecipeController,
};
