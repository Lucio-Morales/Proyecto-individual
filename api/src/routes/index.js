const { Router } = require("express");
const pokemonRoutes = require("./pokemonRoutes");
const typeRoutes = require("./typeRoutes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/pokemons", pokemonRoutes).use("/types", typeRoutes);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
