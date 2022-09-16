const { Diet } = require("../db");

const getDietsController = async function (req, res) {
  try {
    const dietsDB = await Diet.findAll();
    if (dietsDB.length < 1) {
      res.json("No diets found");
    }
    //formating
    else {
      const diets = [];
      dietsDB.forEach((element) => {
        diets.push(element.name);
      });
      res.json(diets);
    }
  } catch (e) {
    res.json("error at get diets: " + e.message);
  }
};

module.exports = {
  getDietsController,
};
