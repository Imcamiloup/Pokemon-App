const { Router } = require('express');

const { getAllPokemonsHandler, createPokemonHandler, getByIdPokemonHandler, getByNamePokemonsHandler } = require('../Handlers/pokemonsHandler');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getAllPokemonsHandler);

pokemonsRouter.get('/:id', getByIdPokemonHandler);

pokemonsRouter.get('/name/:name', getByNamePokemonsHandler);

pokemonsRouter.post('/', createPokemonHandler);

module.exports = pokemonsRouter;