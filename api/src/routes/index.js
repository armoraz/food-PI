const { Router } = require("express");
const {
  getRecipesController,
  searchRecipeController,
  getRecipeController,
  postDietsController,
  getDietsController,
  postRecipeController,
} = require("../controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes", getRecipesController, searchRecipeController);
router.post("/diets", postDietsController);
router.get("/recipes/:id", getRecipeController);
router.post("/recipes", postRecipeController);
router.get("/diets", getDietsController);

router.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = router;
