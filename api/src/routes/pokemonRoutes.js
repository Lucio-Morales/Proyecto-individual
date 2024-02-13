const { Router } = require("express");
const { pokemonControllers } = require("../controllers");

const pokemonRoutes = Router();

pokemonRoutes
  .get("/all", pokemonControllers.getPokemons)
  .get("/:id", pokemonControllers.getPokemonById)
  .post("/create", pokemonControllers.postPokemon);

module.exports = pokemonRoutes;
