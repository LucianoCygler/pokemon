import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ handleChange, handleSubmit }) => {
  return (
    <div className={styles.navbar}>
      <form onChange={handleChange}>
        <input
          className={styles.inputsearch}
          type="search"
          name="busqueda"
          placeholder="Enter the pokemon name.."
        ></input>
        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.buttonsearch}
        >
          Search
        </button>
      </form>
      <Link to="/create" className={styles.create}>
        <h2 className={styles.createtext}>Create Pokemon</h2>
      </Link>
    </div>
  );
};
export default Navbar;
