const { Pokemon } = require("../db");

const searchAll = async () => {
  const allPokemons = await Pokemon.findAll();
  if (allPokemons) return allPokemons;
};

const searchById = async (pokemonId) => {
  const searchPokemon = await Pokemon.findByPk(pokemonId);
  if (searchPokemon) {
    return { msg: "Pokemon encontrado", searchPokemon };
  }
};

const createPokemon = async (
  name,
  image,
  life,
  attack,
  defense,
  speed,
  height,
  weight
) => {
  const newPokemon = await Pokemon.create({
    name,
    image,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  });
  if (newPokemon) {
    return { msg: "Pokemon creado con exito.", newPokemon };
  }
};

module.exports = {
  searchAll,
  searchById,
  createPokemon,
};
