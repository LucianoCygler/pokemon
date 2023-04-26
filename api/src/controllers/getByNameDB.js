const { Pokemon, Type } = require("../db");
async function getByNameDB(name) {
  const pokemonFromDatabase = await Pokemon.findOne({
    where: { name: name },
    include: {
      model: Type,
    },
  });

  return pokemonFromDatabase;
}

module.exports = getByNameDB;
