const { Router } = require("express");
const pokemonRouter = require("./pokemonRoutes");
const typesRouter = require("./typesRoutes");

const router = Router();

router.use("/pokemon", pokemonRouter).use("/types", typesRouter);

module.exports = router;
