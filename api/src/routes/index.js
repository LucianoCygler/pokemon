const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Pokemon = require("../models/Pokemon");
const pokemonsRouter = require("./pokemonsRouter");
const typesRouter = require("./typesRouter");
const router = Router();

router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
