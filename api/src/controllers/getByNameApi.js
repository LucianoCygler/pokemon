const axios = require("axios");

async function getByNameApi(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get(url);
  const { id, sprites, stats, height, weight, types } = response.data;

  return {
    id,
    name,
    image: sprites.front_default,
    hp: stats.find((s) => s.stat.name === "hp").base_stat,
    attack: stats.find((s) => s.stat.name === "attack").base_stat,
    defense: stats.find((s) => s.stat.name === "defense").base_stat,
    speed: stats.find((s) => s.stat.name === "speed").base_stat,
    height,
    weight,
    types: types.map((type) => type.type.name),
  };
}

module.exports = getByNameApi;
