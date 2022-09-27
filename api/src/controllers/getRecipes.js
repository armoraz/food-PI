const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getRecipesController = async function (req, res, next) {
  if (req.query.name) next();
  else {
    try {
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
      // try {
      //   const response = await axios.get(
      //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      //   );

      //   const aux = [];

      //   response.data.results.forEach((e) => {
      //     //Formateando recetas a enviar desde API
      //     recipesAPI.push({
      //       id: e.id,
      //       name: e.title,
      //       img: e.image,
      //       healthScore: e.healthScore,
      //       diets: e.diets,
      //     });
      //     //Estableciendo las dietas posibles
      //     e.diets.forEach((element) => {
      //       if (!aux.includes(element)) {
      //         aux.push(element);
      //       }
      //     });
      //   });

      //   //formateando la data de dietas
      //   // const allDiets = aux.map((e) => {
      //   //   return { name: e };
      //   // });

      //   aux.forEach(async (element) => {
      //     await Diet.findOrCreate({
      //       where: { name: element },
      //       default: {},
      //     });
      //   });

      //   //   //Enviando las dietas a DB
      //   //   await Diet.bulkCreate(allDiets);
      // } catch (e) {
      //   recipesAPI.push({ diets: [`ERROR_API: ${e.message}`] });
      // }

      res.json([...recipesDB, ...recipesAPI]);
    } catch (e) {
      res
        .status(500)
        .json({ ERROR: "error at getting all recipes: " + e.message });
    }
  }
};

module.exports = {
  getRecipesController,
};
