const getByIdDB = require("../controllers/getByNameDB");
const createPokemon = require("../controllers/createPokemon");
const getByNameDB = require("../controllers/getByNameDB");

const createPokemonHandler = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight, types } =
    req.body;
  try {
    const pokemon = await getByNameDB(name);
    if (pokemon) {
      return res.status(409).json({ error: "El Pokemon ya existe" });
    }
    const newPokemon = await createPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );
    res.status(201).json(newPokemon);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear el Pokemon");
  }
};

module.exports = createPokemonHandler;
