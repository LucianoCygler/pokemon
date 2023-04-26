const axios = require("axios");

async function getType() {
  const url = `https://pokeapi.co/api/v2/type`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = getType;
