require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Diet, Recipe } = require("../db");

const getAllRecipesController = async function (req, res, next) {
  if (req.query.name) {
    next();
  } else {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
      );
      res.send(response.data);
    } catch (e) {
      res.send("error at getting all recipes", e.message);
    }
  }
};

const searchRecipeController = async function (req, res) {
  const { name } = req.query;
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`
    );
    res.send(response.data);
  } catch (e) {
    res.send("error at searching recipes", e.message);
  }
};

const getRecipeController = async function (req, res) {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    res.send(response.data);
  } catch (e) {
    res.send("error at getting recipe", e.message);
  }
};

const postDietsController = async function (req, res) {
  try {
    res.json(await Diet.bulkCreate(req.body));
  } catch (e) {
    res.send("error at bulk posting diets", e.message);
  }
};

module.exports = {
  getAllRecipesController,
  searchRecipeController,
  getRecipeController,
  postDietsController,
};
