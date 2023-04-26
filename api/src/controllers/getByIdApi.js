const axios = require("axios");
const { Pokemon, Type } = require("../db");
async function getByIdApi(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await axios.get(url);
  const { name, sprites, stats, height, weight, types } = response.data;

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

module.exports = getByIdApi;
