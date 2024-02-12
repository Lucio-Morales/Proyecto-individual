const { Router } = require("express");
const { pokemonControllers } = require("../controllers");

const pokemonRoutes = Router();

pokemonRoutes.get("/all", pokemonControllers.getPokemons).post("/create");

module.exports = pokemonRoutes;
