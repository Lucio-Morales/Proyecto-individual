const { pokemonServices } = require("../services");

//1.Funcion que busca todos los pokemons (api + db)
const getPokemons = async (req, res) => {
  try {
    const response = await pokemonServices.searchAllInDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//2.Funcion que busca un pokemon por su ID
const getById = async (req, res) => {
  const { pokemonId } = req.params;
  try {
    const response = await pokemonServices.searchById(pokemonId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//3.Funcion que crea un pokemon en la base de datos
const postPokemon = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight } = req.body;
  try {
    const response = await pokemonServices.createPokemon(
      name,
      image,
      hp,
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
  getPokemons,
  getById,
  postPokemon,
};
