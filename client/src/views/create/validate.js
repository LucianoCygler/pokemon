export const validate = (input, errors, setErrors) => {
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
  else if (name.length > 250)
    newErrors.name = "Name must have less than 250 characters";
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
