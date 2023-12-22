const { Router } = require("express");
const { pokemonControllers } = require("../controllers");

const pokemonRouter = Router();

pokemonRouter
  .get("/all", pokemonControllers.getPokemons)
  .get("/:pokemonId", pokemonControllers.getById)
  .post("/create", pokemonControllers.postPokemon);

module.exports = pokemonRouter;
