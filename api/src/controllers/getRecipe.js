require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Diet, Recipe } = require("../db");
const { Op } = require("sequelize");

const getRecipeController = async function (req, res, next) {
  const id = req.params.id;
  console.log(typeof id);

  try {
    if (id.includes("-")) {
      //Busqueda en DB
      const recipe = await Recipe.findOne({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
        include: Diet,
      });
    } else {
      //Busqueda en API
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );

      if (response.data.code === 404)
        throw new Error(`Recipe id: ${id} does not exist`);

      const recipe = {
        id: response.data.id,
        name: response.data.title,
        img: response.data.image,
        summary: response.data.summary,
        healthScore: response.data.healthScore,
        diets: response.data.diets,
        instructions: response.data.analyzedInstructions.length
          ? response.data.analyzedInstructions[0].steps
          : ["No instructions available"],
      };
    }
    res.json(recipe);
  } catch (e) {
    e.status = 404;
    next(e);
  }
};

module.exports = {
  getRecipeController,
};
