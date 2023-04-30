import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "../../redux/actions/actions";
import styles from "./create.module.css";
import { Link } from "react-router-dom";
import { validate } from "./validate";

const Create = () => {
  const dispatch = useDispatch();

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
  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type1: "",
    type2: "",
  });

  const [errors, setErrors] = useState({
    name: "(*)",
    image: "(*)",
    hp: "(*)",
    attack: "(*)",
    defense: "(*)",
    speed: "",
    height: "",
    weight: "",
    type1: "",
    type2: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    validate(
      {
        ...input,
        [e.target.name]: e.target.value,
      },
      errors,
      setErrors
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.name &&
      input.image &&
      input.hp &&
      input.attack &&
      input.defense &&
      input.type1 &&
      Object.values(errors).every((error) => error === "")
    ) {
      const newPokemon = {
        name: input.name.trim().toLowerCase(),
        hp: Math.floor(input.hp),
        attack: Math.floor(input.attack),
        defense: Math.floor(input.defense),
        speed: Math.floor(input.speed),
        height: Math.floor(input.height),
        weight: Math.floor(input.weight),
        image: input.image.trim(),
        types: [input.type1, input.type2].filter(Boolean),
      };

      dispatch(createPokemon(newPokemon));

      setInput({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        type1: "",
        type2: "",
      });
      alert("Pokemon creado con exito");
    } else {
      alert("Por favor, complete los campos del formulario");
    }
  };
  return (
    <div>
      <div>
        <h1>Create your own Pokemon!</h1>
      </div>
      <form>
        <div className={styles.caja}>
          <label>Name: </label>
          <input name="name" value={input.name} onChange={handleChange}></input>
          <small>{errors.name}</small>
        </div>
        <div className={styles.caja}>
          <label>Image: </label>
          <input
            name="image"
            value={input.image}
            onChange={handleChange}
          ></input>
          <small>{errors.image}</small>
        </div>
        <div className={styles.caja}>
          <label>HP: </label>
          <input name="hp" value={input.hp} onChange={handleChange}></input>
          <small>{errors.hp}</small>
        </div>
        <div className={styles.caja}>
          <label>Attack: </label>
          <input
            name="attack"
            value={input.attack}
            onChange={handleChange}
          ></input>
          <small>{errors.attack}</small>
        </div>
        <div className={styles.caja}>
          <label>Defense: </label>
          <input
            name="defense"
            value={input.defense}
            onChange={handleChange}
          ></input>
          <small>{errors.defense}</small>
        </div>
        <div className={styles.caja}>
          <label>Speed:</label>
          <input
            name="speed"
            value={input.speed}
            onChange={handleChange}
          ></input>
          <small>{errors.speed}</small>
        </div>
        <div className={styles.caja}>
          <label>Height: </label>
          <input
            name="height"
            value={input.height}
            onChange={handleChange}
          ></input>
          <small>{errors.height}</small>
        </div>
        <div className={styles.caja}>
          <label>Weight: </label>
          <input
            name="weight"
            value={input.weight}
            onChange={handleChange}
          ></input>
          <small>{errors.weight}</small>
        </div>
        <div className={styles.caja}>
          <label>Type 1: </label>
          <select name="type1" value={input.type1} onChange={handleChange}>
            <option></option>

            {typesList.map((type) => (
              <option>{type}</option>
            ))}
          </select>
          <small>{errors.type1}</small>
        </div>
        <div className={styles.caja}>
          <label>Type 2: </label>
          <select name="type2" value={input.type2} onChange={handleChange}>
            <option></option>
            {typesList.map((type) => (
              <option>{type}</option>
            ))}
          </select>
          <small>{errors.type2}</small>
        </div>

        {errors.name ? null : (
          <button type="subimt" onClick={handleSubmit}>
            Create
          </button>
        )}
      </form>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};
export default Create;
