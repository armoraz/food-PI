const { Diet } = require("../db");

const getDietsController = async function (req, res) {
  try {
    const diets = await Diet.findAll();
    res.json(diets.length ? diets : "No diets found");
  } catch (e) {
    res.send("error at get diets", e.message);
  }
};

module.exports = {
  getDietsController,
};
