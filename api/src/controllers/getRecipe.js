require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

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
      instructions: response.data.analyzedInstructions.length
        ? response.data.analyzedInstructions[0].steps
        : "No instructions available",
    });
  } catch (e) {
    res.send("error at getting recipe", e.message);
  }
};

module.exports = {
  getRecipeController,
};
