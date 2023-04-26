import Card from "../card/card";
import styles from "./cards.module.css";
const Cards = ({ allPokemons }) => {
  const pokemonsList = Array.isArray(allPokemons) ? allPokemons : [allPokemons];
  return (
    <div className={styles.cardscontainer}>
      {pokemonsList?.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
export default Cards;
