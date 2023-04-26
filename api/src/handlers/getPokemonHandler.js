const getByIdApi = require("../controllers/getByIdApi");
const getByIdDB = require("../controllers/getByIdDB");

const getPokemonHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(400).send("Por favor, proporcione un ID de Pokémon válido");
      return;
    }

    if (isNaN(id)) {
      const pokemonFromDatabase = await getByIdDB(id);
      if (pokemonFromDatabase) {
        const formattedPokemon = {
          id,
          name: pokemonFromDatabase.name,
          image: pokemonFromDatabase.image,
          hp: pokemonFromDatabase.hp,
          attack: pokemonFromDatabase.attack,
          defense: pokemonFromDatabase.defense,
          speed: pokemonFromDatabase.speed,
          height: pokemonFromDatabase.height,
          weight: pokemonFromDatabase.weight,
          types: pokemonFromDatabase.Types.map((type) => type.name),
        };
        res.status(200).send(formattedPokemon);
      } else {
        res
          .status(404)
          .send("No se encontró ningún Pokémon con el ID especificado");
      }
    } else {
      const pokemon = await getByIdApi(id);
      res.status(200).send(pokemon);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(`Error al obtener los detalles del Pokémon: ${error.message}`);
  }
};
module.exports = getPokemonHandler;
