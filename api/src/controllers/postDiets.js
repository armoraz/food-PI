require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Diet } = require("../db");

const postDietsController = async function (req, res, next) {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );

    const aux = [];
    const recipes = [];
    //Iteracion para conseguir las dietas posibles
    response.data.results.forEach((e) => {
      recipes.push({
        id: e.id,
        name: e.title,
        img: e.image,
        healthScore: e.healthScore,
        diets: e.diets,
      });
      e.diets.forEach((element) => {
        if (!aux.includes(element)) {
          aux.push(element);
        }
      });
    });

    //formateando la data
    const allDiets = aux.map((e) => {
      return { name: e };
    });

    await Diet.bulkCreate(allDiets);

    res.json(recipes);
  } catch (e) {
    res.json("error at bulk posting diets: " + e.message);
  }
};

module.exports = {
  postDietsController,
};
