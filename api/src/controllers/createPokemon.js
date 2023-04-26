//const id = uuid.v4();
// Crear el objeto Pokemon con los datos recibidos en el body
// Generar un nuevo UUID para el Pokemon
const { Pokemon, Type } = require("../db");
const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const newPokemon = await Pokemon.create({
    //id,
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });

  if (types && types.length) {
    const associatedTypes = await Promise.all(
      types.map((type) => Type.findOne({ where: { name: type } }))
    );
    await newPokemon.setTypes(associatedTypes);
  }
  await newPokemon.reload({
    include: [
      {
        model: Type,
      },
    ],
  });
  const typeNames = newPokemon.Types.map((type) => type.name);

  return {
    id: newPokemon.id,
    name: newPokemon.name,
    image: newPokemon.image,
    hp: newPokemon.hp,
    attack: newPokemon.attack,
    defense: newPokemon.defense,
    speed: newPokemon.speed,
    height: newPokemon.height,
    weight: newPokemon.weight,
    createdInDb: newPokemon.createdInDb,
    Types: typeNames,
  };
};
module.exports = createPokemon;
