const { getAllPokemonsController, 
    getByIdPokemonController,
    getByNamePokemonsController,
    createPokemonController
     } = require('../Controllers/pokemonsController');

const getAllPokemonsHandler = async (req, res) => {
    try {
        const pokemons = await getAllPokemonsController();
        res.status(200).send(pokemons);
    } catch (error) {
        res.status(500).send('Pokemons not found');
    }
}

const getByIdPokemonHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const origin = id.length < 7 ? "Api" : "BDD"
        const pokemon = await getByIdPokemonController(id, origin);
        if (!pokemon) throw new Error("Pokemon not found");
        res.status(200).send(pokemon);
    } catch (error) {
        res.status(500).send('Pokemon By Id Controller Error: ' + error.message);
    }
}

const getByNamePokemonsHandler = async (req, res) => {
    try{
    const { name } = req.params;
    if (!name) throw new Error("Missing data");
    const pokemons = await getByNamePokemonsController(name)
    console.log('pokemons:',pokemons)
    res.status(200).json(pokemons)
    }
    catch (error) {
     res.status(500).send('Pokemon By Name Controller Error: ' + error.message);
    }
}

const createPokemonHandler = async (req, res) => {
    try {
        const { name, image, health, attack, defense, speed, height, weight, types } = req.body;
        if (!name || !image || !health || !attack || !defense || !speed || !height || !weight || !types) throw new Error("Missing data");
        const newPokemon = await createPokemonController(name, image, health, attack, defense, speed, height, weight, types);
        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(500).send('Error creating pokemon');
    }
}

module.exports = {
    getAllPokemonsHandler,
    getByIdPokemonHandler,
    getByNamePokemonsHandler,
    createPokemonHandler,
}