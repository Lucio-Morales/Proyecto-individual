const { pokemonServices } = require("../services");

const postPokemon = async (req, res) => {
  const { name, hp, attack, defense, speed, weight, height, image } = req.body;
  try {
    const response = await pokemonServices.createPokemon(
      name,
      hp,
      attack,
      defense,
      speed,
      weight,
      height,
      image
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemons = async (req, res) => {
  const { origin } = req.query;
  try {
    const serviceResponse =
      origin === "api"
        ? await pokemonServices.getApiPokemons()
        : origin === "db"
        ? await pokemonServices.getDbPokemons()
        : await pokemonServices.getTotalPokemons();
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await pokemonServices.searchById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemonById,
  postPokemon,
  getPokemons,
};
