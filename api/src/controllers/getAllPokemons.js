const axios = require("axios");
const { Pokemon, Type } = require("../db");

async function getAllPokemons() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=60`;
  const response = await axios.get(url);
  const pokemons = response.data.results;

  const pokemonDataPromises = pokemons.map(async (pokemon) => {
    const url = pokemon.url;
    const response = await axios.get(url);
    const { id, name, sprites, stats, height, weight, types } = response.data;

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
  });
  const apiPokemons = await Promise.all(pokemonDataPromises);

  const dbPokemons = await Pokemon.findAll({
    include: {
      model: Type,
    },
  });

  const formattedDbPokemons = dbPokemons.map((element) => {
    const {
      id,
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      createdInDb,
    } = element.dataValues;
    const formattedTypes = element.dataValues.Types.map(
      (element) => element.name
    );

    return {
      id,
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      types: formattedTypes,
      createdInDb,
    };
  });
  const allPokemons = [...formattedDbPokemons, ...apiPokemons];

  return allPokemons;
}

module.exports = getAllPokemons;
