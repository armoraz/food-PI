const { Router } = require("express");
const {
  getAllDietsController,
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

router.get("/recipes", getAllDietsController, searchRecipeController);
router.get("/recipes/:id", getRecipeController);
router.post("/recipes", postRecipeController);
router.get("/diets", getDietsController);
router.post("/diets", postDietsController);

module.exports = router;
