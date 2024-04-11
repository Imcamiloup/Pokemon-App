const { Router } = require('express');

const { getAllPokemonsHandler, 
    createPokemonHandler, 
    getByIdPokemonHandler, 
    getByNamePokemonsHandler,
    updatePokemonHandler,
    } = require('../Handlers/pokemonsHandler');

const pokemonsRouter = Router();

pokemonsRouter.get('/', getAllPokemonsHandler);

pokemonsRouter.get('/:id', getByIdPokemonHandler);

pokemonsRouter.get('/name/:name', getByNamePokemonsHandler);

pokemonsRouter.post('/', createPokemonHandler);

pokemonsRouter.put('/:id', updatePokemonHandler);

module.exports = pokemonsRouter;