const { Pokemon } = require("../db");
const axios = require("axios");

const url = "https://pokeapi.co/api/v2/pokemon?limit=80";

const cleanArray = async (url) => {
  const data = (await axios.get(url)).data;

  const cleanData = {
    name: data.name,
    height: data.height,
  };
  return cleanData;
};

// Debe buscar todos los pokemons (api + db)
const searchAll = async () => {
  const [apiPokemons, dbPokemons] = await Promise.all([
    searchAllInAPI(),
    searchAllInDB(),
  ]);
  const allPokemons = [...apiPokemons, ...dbPokemons];
  return allPokemons;
};

//Debe buscar solo los pokemons de la api
const searchAllInAPI = async () => {
  const apiPokemons = (await axios.get(url)).data.results;

  const promises = apiPokemons.map((pokemon) => cleanArray(pokemon.url));
  const filteredResults = await Promise.all(promises);
  return filteredResults;
};

//Debe buscar solo los pokemons de la db
const searchAllInDB = async () => {
  // Busca todos los pokemons de la DB
  const dbPokemons = await Pokemon.findAll();
  if (dbPokemons) return dbPokemons;
};

//Debe buscar un pokemon por su id
const searchById = async (pokemonId) => {
  const searchPokemon = await Pokemon.findByPk(pokemonId);
  if (searchPokemon) {
    return { msg: "Pokemon encontrado", searchPokemon };
  }
};

//Debe crear un pokemon
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
  searchAllInAPI,
  searchAllInDB,
  searchById,
  createPokemon,
};
