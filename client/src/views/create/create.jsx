import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPokemon } from "../../redux/actions/actions";
import styles from "./create.module.css";
import { Link } from "react-router-dom";

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

  const validate = (input) => {
    let newErrors = { ...errors };
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      type1,
      type2,
    } = input;

    if (!name) newErrors.name = "Name cannot be empty";
    else if (!isNaN(name)) newErrors.name = "Name must be string";
    else if (name.length < 3)
      newErrors.name = "Name must have at least 3 characters";
    else newErrors.name = "";

    if (!image) newErrors.image = "Image cannot be empty";
    else if (typeof image !== "string") newErrors.name = "Name must be string";
    else if (
      !/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(
        image
      )
    ) {
      newErrors.image = "Must be a link to an image";
    } else newErrors.image = "";

    if (!hp) newErrors.hp = "HP cannot be empty";
    else if (!Number.isInteger(Number(hp)))
      newErrors.hp = "HP must be an integer";
    else if (hp < 0 || hp > 255) newErrors.hp = "HP must be 255 or less";
    else newErrors.hp = "";

    if (!attack) newErrors.attack = "Attack cannot be empty";
    else if (!Number.isInteger(Number(attack)))
      newErrors.attack = "Attack must be an integer";
    else if (attack < 0 || attack > 255)
      newErrors.attack = "Attack must be 255 or less";
    else newErrors.attack = "";

    if (!defense) newErrors.defense = "Defense cannot be empty";
    else if (!Number.isInteger(Number(defense)))
      newErrors.defense = "Defense must be an integer";
    else if (defense < 0 || defense > 255)
      newErrors.defense = "Defense must be 255 or less";
    else newErrors.defense = "";

    if (speed) {
      if (!Number.isInteger(Number(speed)))
        newErrors.speed = "Speed must be an integer";
      else if (speed < 0 || speed > 255)
        newErrors.speed = "Speed must be 255 or less";
      else newErrors.speed = "";
    }

    if (height) {
      if (!Number.isInteger(Number(height)))
        newErrors.height = "Height must be an integer";
      else if (height < 0 || height > 14)
        newErrors.height = "Height must be 14 or less";
      else newErrors.height = "";
    }

    if (weight) {
      if (!Number.isInteger(Number(weight)))
        newErrors.weight = "Weight must be an integer";
      else if (weight < 0 || weight > 1000)
        newErrors.weight = "Weight must be 1000 or less";
      else newErrors.weight = "";
    }

    if (!type1) newErrors.type1 = "Type 1 cannot be empty";
    else newErrors.type1 = "";

    if (type2) {
      if (type2 === type1) newErrors.type2 = "Types must be different";
      else newErrors.type2 = "";
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
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
        types: [input.type1, input.type2],
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
        <div>
          <label>Name: </label>
          <input name="name" value={input.name} onChange={handleChange}></input>
          <span>{errors.name}</span>
        </div>
        <div>
          <label>Image: </label>
          <input
            name="image"
            value={input.image}
            onChange={handleChange}
          ></input>
          <span>{errors.image}</span>
        </div>
        <div>
          <label>HP: </label>
          <input name="hp" value={input.hp} onChange={handleChange}></input>
          <span>{errors.hp}</span>
        </div>
        <div>
          <label>Attack: </label>
          <input
            name="attack"
            value={input.attack}
            onChange={handleChange}
          ></input>
          <span>{errors.attack}</span>
        </div>
        <div>
          <label>Defense: </label>
          <input
            name="defense"
            value={input.defense}
            onChange={handleChange}
          ></input>
          <span>{errors.defense}</span>
        </div>
        <div>
          <label>Speed:</label>
          <input
            name="speed"
            value={input.speed}
            onChange={handleChange}
          ></input>
          <span>{errors.speed}</span>
        </div>
        <div>
          <label>Height: </label>
          <input
            name="height"
            value={input.height}
            onChange={handleChange}
          ></input>
          <span>{errors.height}</span>
        </div>
        <div>
          <label>Weight: </label>
          <input
            name="weight"
            value={input.weight}
            onChange={handleChange}
          ></input>
          <span>{errors.weight}</span>
        </div>
        <div>
          <label>Type 1: </label>
          <select name="type1" value={input.type1} onChange={handleChange}>
            <option></option>

            {typesList.map((type) => (
              <option>{type}</option>
            ))}
          </select>
          <span>{errors.type1}</span>
        </div>
        <div>
          <label>Type 2: </label>
          <select name="type2" value={input.type2} onChange={handleChange}>
            <option></option>
            {typesList.map((type) => (
              <option>{type}</option>
            ))}
          </select>
          <span>{errors.type2}</span>
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
