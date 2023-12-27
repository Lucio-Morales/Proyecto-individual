const { pokemonServices } = require("../services");

const getPokemons = async (req, res) => {
  try {
    const response = await pokemonServices.searchAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getByOrigin = async (req, res) => {
  const { origin } = req.query;
  try {
    const response =
      origin === "api"
        ? await pokemonServices.searchAllInAPI()
        : await pokemonServices.searchAllInDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  const { pokemonId } = req.params;
  try {
    const response = await pokemonServices.searchById(pokemonId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postPokemon = async (req, res) => {
  const { name, image, life, attack, defense, speed, height, weight } =
    req.body;
  try {
    const response = await pokemonServices.createPokemon(
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getByOrigin,
  getPokemons,
  getById,
  postPokemon,
};
