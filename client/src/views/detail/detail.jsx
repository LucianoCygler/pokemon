import styles from "./detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { clearDetail, getById } from "../../redux/actions/actions";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getById(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch]);
  return (
    <div className={styles.contenedor}>
      <div className={styles.imagen}>
        <img src={pokemon?.image}></img>
      </div>

      <h2>{pokemon?.name}</h2>
      <div className={styles.stats}>
        <p>
          hp <p>{pokemon?.hp}</p>
        </p>
        <p>
          attack <p>{pokemon?.attack}</p>
        </p>
        <p>
          defense <p>{pokemon?.defense}</p>
        </p>
        <p>
          height <p>{pokemon?.height}</p>
        </p>
        <p>
          speed <p>{pokemon?.speed}</p>
        </p>
        <p>
          weight <p>{pokemon?.weight}</p>
        </p>
      </div>
      <h3>Types:</h3>
      <div className={styles.type}>
        {pokemon?.types ? (
          pokemon.types.map((type) => <p>{type}</p>)
        ) : (
          <p>Loading types...</p>
        )}
      </div>

      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default Detail;
