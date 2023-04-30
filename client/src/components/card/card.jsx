import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  console.log(pokemon);
  const { id, name, image, types } = pokemon;
  return (
    <Link to={`/detail/${id}`} className={styles.cardcontainer}>
      <div className={styles.cardcontainerExt}>
        <div className={styles.imagecontainer}>
          <img src={image}></img>
        </div>

        <h2>{name}</h2>
        <h3>Types:</h3>

        {types?.map((type) => (
          <p>{type}</p>
        ))}
      </div>
    </Link>
  );
};
export default Card;
