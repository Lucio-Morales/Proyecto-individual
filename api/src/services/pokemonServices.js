const { Pokemon } = require("../db");
const axios = require("axios");

//Busca todos los pokemons de la db
const searchAllInDB = async () => {
  // Busca todos los pokemons de la DB
  const dbPokemons = await Pokemon.findAll();
  if (dbPokemons) return dbPokemons;
};

//Busca un pokemon por su id en la db
const searchById = async (pokemonId) => {
  const searchPokemon = await Pokemon.findByPk(pokemonId);
  if (searchPokemon) {
    return { msg: "Pokemon encontrado", searchPokemon };
  }
};

//Crea un pokemon en la db
const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight
) => {
  const newPokemon = await Pokemon.create({
    name,
    image,
    hp,
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

const getAllPokemonsApi = async () => {
  // esta funcion retorna un array con pokemons
  // en cada objeto hay una propiedad "name" y una propiedad "url"
  // la propiedad "url" nos da acceso a toda la info de cada pokemon
  const pokemonsArray = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`)
  ).data.results;
  return pokemonsArray;
};
const searchPropsAndSave = async (url) => {
  const response = await axios.get(url);
  const { name, height, stats, weight } = response.data;
  const image = response.data.sprites?.front_default;
  const types = response.data.types.map((type) => type.type.name);

  const statsData = {};

  for (const stat of stats) {
    const statName = stat.stat.name;
    const statValue = stat.base_stat;
    if (statName !== "special-attack" && statName !== "special-defense") {
      statsData[statName] = statValue;
    }
  }

  const pokemon = await Pokemon.create({
    name,
    height,
    image,
    ...statsData,
    weight,
    types,
    created: false,
  });
};

const savePokemonsInDB = async () => {
  const pokemonList = await getAllPokemonsApi();
  for (const pokemon of pokemonList) {
    await searchPropsAndSave(pokemon.url);
  }
};

module.exports = {
  savePokemonsInDB,
  searchAllInDB,
  searchById,
  createPokemon,
};
