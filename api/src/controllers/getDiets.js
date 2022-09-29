const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getDietsController = async function (req, res, next) {
  try {
    //PAST VERSION
    // const dietsDB = await Diet.findAll();
    // if (dietsDB.length < 1) {
    //   res.json(["No diets found"]);
    // }
    // //formating
    // else {
    //   const diets = [];
    //   dietsDB.forEach((element) => {
    //     diets.push(element.name);
    //   });
    //   res.json(diets);
    // }

    //ANOTHER APROACH
    //Recetas de la DB
    const rDB = await Recipe.findAll({ include: Diet });
    const recipesDB = [];
    //Formateando recetas de la DB en caso de haber
    if (rDB) {
      rDB.forEach((r) => {
        recipesDB.push({
          id: r.id,
          name: r.name,
          img: r.img ? r.img : "https://i.redd.it/t9y87m5f0pz41.jpg",
          healthScore: r.healthScore,
          diets: r.diets.map((element) => {
            return element.name;
          }),
        });
      });
    }

    //Recetas API
    const recipesAPI = [];
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );

    const aux = [];

    response.data.results.forEach((e) => {
      //Formateando recetas a enviar desde API
      recipesAPI.push({
        id: e.id,
        name: e.title,
        img: e.image,
        healthScore: e.healthScore,
        diets: e.diets,
      });
      //Estableciendo las dietas posibles
      e.diets.forEach((element) => {
        if (!aux.includes(element)) {
          aux.push(element);
        }
      });
    });

    //DEPRECATED

    //formateando la data de dietas
    // const allDiets = aux.map((e) => {
    //   return { name: e };
    // });
    //   //Enviando las dietas a DB
    //   await Diet.bulkCreate(allDiets);

    const aux2 = aux.map(async (element) => {
      const [diet, created] = await Diet.findOrCreate({
        where: { name: element },
        default: {},
      });

      return diet;
    });

    Promise.all([...aux2]).then((data) => {
      const listDiets = [...data];
      res.json({ recipes: [...recipesAPI, ...recipesDB], diets: listDiets });
    });
  } catch (e) {
    e.message = "error at get diets: " + e.message;
    next(e);
  }
};

module.exports = {
  getDietsController,
};
