const axios = require("axios");

const getPokemonsInAPI = async () => {
  const apiResponse = (
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60")
  ).data.results;
  console.log(apiResponse);
};

const getPokemonsInDB = () => {};

module.exports = {
  getPokemonsInAPI,
  getPokemonsInDB,
};
