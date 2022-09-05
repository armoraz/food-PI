const { Router } = require("express");
const {
  getAllRecipesController,
  searchRecipeController,
  getRecipeController,
  postDietsController,
} = require("../controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes", getAllRecipesController, searchRecipeController);
router.get("/recipes/:id", getRecipeController);
router.post("/recipes");
router.get("/diets");
router.post("/diets", postDietsController);

module.exports = router;
