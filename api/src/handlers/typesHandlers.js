const getType = require("../controllers/getType");
const axios = require("axios");
const { Type } = require("../db");

const getTypesHandler = async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type/");
    const types = response.data.results.map((type) => ({
      name: type.name,
    }));
    await Type.bulkCreate(types);
    res.status(200).send(types);

    console.log(types);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = getTypesHandler;
