const getAllPokemons = require("../controllers/getAllPokemons");
const getByNameApi = require("../controllers/getByNameApi");
const getByNameDB = require("../controllers/getByNameDB");

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const pokemonFromDatabase = await getByNameDB(name);
      if (pokemonFromDatabase) {
        const formattedPokemon = {
          id: pokemonFromDatabase.id,
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
        return;
      }

      const pokemonFromApi = await getByNameApi(name);
      res.status(200).send(pokemonFromApi);
      return;
    }

    const allPokemons = await getAllPokemons();
    res.status(200).send(allPokemons);
  } catch (error) {
    res.status(500).send(`Error al obtener los POKEMONES: ${error.message}`);
  }
};
module.exports = getPokemonsHandler;
