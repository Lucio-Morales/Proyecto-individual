const { Type } = require("../db");
const axios = require("axios");

const getTypes = async () => {
  const allTypes = await Type.findAll();
  if (allTypes) {
    return { types: allTypes };
  }
};

const saveTypesInDB = async () => {
  const typesFromAPI = (await axios.get("https://pokeapi.co/api/v2/type")).data
    .results;
  const allTypes = typesFromAPI.map((type) => type.name);

  const createdTypes = await Type.bulkCreate(
    allTypes.map((name) => ({ name }))
  );
  console.log(createdTypes);
};

module.exports = { getTypes, saveTypesInDB };
