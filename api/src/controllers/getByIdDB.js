const { Pokemon, Type } = require("../db");
const getByIdDB = async (id) => {
  const pokemon = await Pokemon.findByPk(id, {
    include: {
      model: Type,
    },
  });
  return pokemon;
};
module.exports = getByIdDB;
