const { pokemonServices } = require("../services");

const getPokemons = async (req, res) => {
  const { origin } = req.query;
  try {
    const serviceResponse =
      origin === "api"
        ? await pokemonServices.getApiPokemons()
        : origin === "db"
        ? await pokemonServices.getDbPokemons()
        : await pokemonServices.totalPokemons();
    res.status(200).json(serviceResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemons,
};
