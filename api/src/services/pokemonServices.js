const { Pokemon } = require("../db");
const axios = require("axios");

const createPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  weight,
  height,
  image
) => {
  const newPokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    weight,
    height,
    image,
  });
  if (newPokemon) return { msg: "Pokemon creado.", pokemon: newPokemon };
};

const searchById = async (id) => {
  const pokemon = await Pokemon.findByPk(id);
  if (pokemon) return pokemon;
};

const searchPokemonsInAPI = async () => {
  const apiPokemons = (
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60")
  ).data.results;

  return apiPokemons;
};

const searchProps = async (url) => {
  //esta funcion recibe una url
  //hace una peticion a esa url y obtiene la info de cada pokemon
  //manipula y filtra las propiedades relevantes
  //retorna un objeto con esas propiedades.
  const response = await axios.get(url);

  const { name, height, stats, weight } = response.data;
  const image = response.data.sprites?.front_default;
  const types = response.data.types.map((type) => type.type.name);

  const statsData = {};

  for (const stat of stats) {
    const statName = stat.stat.name;
    const statValue = stat.base_stat;
    // ignoro estas 2 propiedades:
    if (statName !== "special-attack" && statName !== "special-defense") {
      // creacion de key:value al objeto creado en la linea 45
      // con los valores extraidos de stats
      statsData[statName] = statValue;
    }
  }
  return {
    name,
    image,
    ...statsData,
    weight,
    height,
    types,
    created: false,
  };
};

const totalPokemons = async () => {
  // array con todos los pokemons: {name: "name", url: "www.pokemonData.com"}
  const pokemonList = await searchPokemonsInAPI();
  // array de pokemons de la database:
  // const pokemonsDB = await getAllPokemonsDB();

  // array de pokemons procesado mediante searchProps(url)
  const promises = pokemonList.map((pokemon) => searchProps(pokemon.url));

  // le paso el array de promesas a promise.all para no tener que procesarlas de manera secuencial
  const totalPokemons = await Promise.all(promises);
  for (const pokemonData of totalPokemons) {
    await savePokemonsToDatabase(pokemonData);
  }
};

const savePokemonsToDatabase = async (pokemonData) => {
  const createdPokemon = await Pokemon.create(pokemonData);
  console.log(`Pokemon ${createdPokemon.name} guardado en la DB.`);
};

const getApiPokemons = async () => {
  const apiPokemons = await Pokemon.findAll({
    where: {
      created: false,
    },
  });
  return apiPokemons;
};

const getDbPokemons = async () => {
  const dbPokemons = await Pokemon.findAll({
    where: {
      created: true,
    },
  });
  return dbPokemons;
};

const getTotalPokemons = async () => {
  const pokemons = await Pokemon.findAll();
  if (pokemons) {
    return pokemons;
  } else {
    return { msg: "Todavia no hay pokemons cargados." };
  }
};

module.exports = {
  searchById,
  createPokemon,
  totalPokemons,
  getTotalPokemons,
  getApiPokemons,
  getDbPokemons,
};
