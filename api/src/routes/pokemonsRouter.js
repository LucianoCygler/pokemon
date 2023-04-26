const { Router } = require("express");
const pokemonsRouter = Router();
const getPokemonHandler = require("../handlers/getPokemonHandler");
const getPokemonsHandler = require("../handlers/getPokemonsHandler");
const createPokemonHandler = require("../handlers/createPokemonHandler");

pokemonsRouter.get("/", getPokemonsHandler);

pokemonsRouter.get("/:id", getPokemonHandler);

pokemonsRouter.post("/", createPokemonHandler);

module.exports = pokemonsRouter;
