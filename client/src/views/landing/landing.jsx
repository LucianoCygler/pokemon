import styles from "./landing.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemons, getTypes } from "../../redux/actions/actions";
const Landing = () => {
  return (
    <div className={styles.contenedor}>
      <Link to="/home">
        <button className={styles.boton}>Enter the page</button>
      </Link>
    </div>
  );
};
export default Landing;
