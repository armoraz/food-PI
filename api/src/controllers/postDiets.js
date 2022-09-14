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
    //Iteracion para conseguir las dietas posibles
    response.data.results.forEach((e) => {
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

    res.json(await Diet.bulkCreate(allDiets));
  } catch (e) {
    res.send("error at bulk posting diets", e.message);
  }
};

module.exports = {
  postDietsController,
};
