import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearDetail,
  getByName,
  getPokemons,
  getTypes,
  orderPokemons,
  orderPokemonsByAttack,
  orderPokemonsByDefense,
  setFilterOrigin,
  setFilterType,
} from "../../redux/actions/actions";

import Paginado from "../../components/paginado/paginado";
import Cards from "../../components/cards/cards";
import Navbar from "../../components/navbar/navbar";
import Filter from "../../components/filter/filter";
import styles from "./home.module.css";
const Home = () => {
  const pokemon = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.filteredPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexLastPokemon = currentPage * pokemonsPerPage;
  const indexFirstPokemon = indexLastPokemon - pokemonsPerPage;
  const currentPokemons = Array.isArray(allPokemons)
    ? allPokemons.slice(indexFirstPokemon, indexLastPokemon)
    : [];

  const [showSearchResults, setShowSearchResults] = useState(false);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const order = (event) => {
    dispatch(orderPokemons(event.target.value));
  };
  const orderByAttack = (event) => {
    dispatch(orderPokemonsByAttack(event.target.value));
  };

  const [searchString, setSearchString] = useState("");

  const typesList = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchString));
    setShowSearchResults(true);
  };

  const handleFilterType = (e) => {
    dispatch(setFilterType(e.target.value));
  };

  const handleFilterOrigin = (e) => {
    dispatch(setFilterOrigin(e.target.value));
  };

  const handleFilterDefense = (e) => {
    dispatch(orderPokemonsByDefense(e.target.value));
  };
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);
  useEffect(() => {
    const totalPages = Math.ceil(allPokemons.length / pokemonsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [allPokemons]);

  return (
    <div className={styles.home}>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Filter
        typesList={typesList}
        order={order}
        handleFilterOrigin={handleFilterOrigin}
        orderByAttack={orderByAttack}
        handleFilterType={handleFilterType}
        handleFilterDefense={handleFilterDefense}
      />
      <Paginado
        className={styles.paginado}
        pokemonsPerPage={pokemonsPerPage}
        allPokemons={allPokemons.length}
        paginated={paginated}
        currentPage={currentPage}
      />

      {showSearchResults ? (
        <div>
          <Cards allPokemons={pokemon} />
          <button onClick={() => setShowSearchResults(false)}>Return</button>
        </div>
      ) : (
        <Cards allPokemons={currentPokemons} />
      )}
    </div>
  );
};

export default Home;
