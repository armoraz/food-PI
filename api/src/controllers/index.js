require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const e = require("express");
const { Diet, Recipe } = require("../db");

const getAllDietsController = async function (req, res, next) {
  if (req.query.name) {
    next();
  } else {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      );
      const allDiets = [];
      response.data.results.map((e) => {
        e.diets.forEach((element) => {
          if (!allDiets.includes(element)) {
            allDiets.push(element);
          }
        });
      });
      res.json(allDiets);
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
    const searchedRecipes = [];
    response.data.results.map((e) => {
      searchedRecipes.push({
        name: e.title,
        img: e.image,
        summary: e.summary,
        diets: e.diets,
        instructions: e.analyzedInstructions,
      });
    });
    res.json(searchedRecipes);
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

    res.json({
      id: response.data.id,
      name: response.data.title,
      img: response.data.image,
      summary: response.data.summary,
      diets: response.data.diets,
      instructions: response.data.analyzedInstructions,
    });
  } catch (e) {
    res.send("error at getting recipe", e.message);
  }
};

const postRecipeController = async function (req, res) {
  const { name, instructions, healthScore, summary } = req.body;
  try {
    const newRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      instructions,
    });

    res.json(newRecipe);
  } catch (e) {
    res.send("error at posting recipe", e.message);
  }
};

const getDietsController = async function (req, res) {
  try {
    const diets = await Diet.findAll();
    res.json(diets.length ? diets : "No diets found");
  } catch (e) {
    res.send("error at get diets", e.message);
  }
};

const postDietsController = async function (req, res) {
  try {
    if (req.body) {
      res.json(await Diet.bulkCreate(req.body));
    }
  } catch (e) {
    res.send("error at bulk posting diets", e.message);
  }
};

module.exports = {
  getAllDietsController,
  searchRecipeController,
  getRecipeController,
  postRecipeController,
  getDietsController,
  postDietsController,
};
