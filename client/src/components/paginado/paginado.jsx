import React from "react";
import styles from "./paginado.module.css";

export default function Paginado({ pokemonsPerPage, allPokemons, paginated }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={styles.container}>
      <ul className={styles.paginadoContainer}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={styles.pagina} onClick={() => paginated(number)}>
              <a>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
