const { Pokemon, Type} = require('../db.js');
const axios = require('axios');
const { Op } = require('sequelize');


const getPokemonsApi = async () => {
    try {
        const pokemonsList = [];
        const promises = [];
        
        for (let i = 1; i <= 50; i++) { 
            promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        const responses = await Promise.all(promises);
        for (const response of responses) {
            const pokemon = response.data;
            const pokemonData = {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                health: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types.map(t => ({ name: t.type.name }))
            }
            pokemonsList.push(pokemonData);
        }
        return pokemonsList;
    } catch (error) {
        throw new Error("Error getting pokemons: " + error.message);
    }
}

const getAllPokemonsController = async () => {
    try {
        const pokemonsApi = await getPokemonsApi();
        const pokemonsApiWithId = pokemonsApi.map(p => {
            return {
                ...p,
                types: p.types.map((t, index) => ({ 
                    id: index + 1, // Asignar un ID único a cada tipo
                    name: t.name 
                }))
            };
        });

        const responseDb = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["id","name"],
                through: {
                    attributes: []
                },
            },
        });
        const pokemonsDb = responseDb.map(p => {
            return {
                id: p.id,
                name: p.name,
                image: p.image,
                health: p.health,
                attack: p.attack,
                defense: p.defense,
                speed: p.speed,
                height: p.height,
                weight: p.weight,
                types: p.Types.map((t) => ({ 
                    id: t.id,
                    name: t.name }))
            }
        });

        const allPokemons  =[...pokemonsDb, ...pokemonsApiWithId];
        return allPokemons;
    } catch (error) {
        throw new Error("Error get pokemons: " + error.message);
    }
}

const getByIdPokemonController = async (id,origin) => {
    try {
        if (!id) throw new Error("Missing data");
        if(origin === "Api"){
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonData = {
                id: pokemon.data.id,
                name: pokemon.data.name,
                image: pokemon.data.sprites.other.dream_world.front_default,
                health: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                types: pokemon.data.types.map((t,index) => {
                    return {
                        id: index + 1,
                        name: t.type.name
                    }
                })
            }
            return pokemonData;
        }
        else{
        const pokemon = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ["id","name"],
                through: {
                    attributes: []
                },
            },
        });
        if (!pokemon) throw new Error("Pokemon not found");
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            health: pokemon.health,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.Types.map((t) => ({ 
                id: t.id,
                name: t.name }))
        }
    }
    } catch (error) {
        throw new Error("Error getting pokemon by id: " + error.message);
    }
}

const createPokemonController = async (name, image, health, attack, defense, speed, height, weight, types) => {
    try {
        const newPokemon = await Pokemon.create({
            name,
            image,
            health,
            attack,
            defense,
            speed,
            height,
            weight,
            types
        });
         newPokemon.addType(types);
        return newPokemon;
    } catch (error) {
        throw new Error("Error creating pokemon: " + error.message);
    }
}

const getByNamePokemonsController = async  (name) => {
    try{
        const pokemons = await Pokemon.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.iLike]: `%${name}%` } },
                ],
            },
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: []
                },
            },
        });
        const pokemonDbObjects = pokemons.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.image,
                health: pokemon.health,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.Types.map((t) => ({ 
                    id: t.id,
                    name: t.name }))
            }
        });
        let pokemonData=[];
        try{
            const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)? 
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) : {};
            if (pokemonApi.data){
                pokemonData = {
                    id: pokemonApi.data.id,
                    name: pokemonApi.data.name,
                    image: pokemonApi.data.sprites.other.dream_world.front_default,
                    health: pokemonApi.data.stats[0].base_stat,
                    attack: pokemonApi.data.stats[1].base_stat,
                    defense: pokemonApi.data.stats[2].base_stat,
                    speed: pokemonApi.data.stats[5].base_stat,
                    height: pokemonApi.data.height,
                    weight: pokemonApi.data.weight,
                    types: pokemonApi.data.types.map((t,index) => {
                        return {
                            id: index + 1,
                            name: t.type.name
                        }
                    })
                }
            }
            else{
                pokemonData = [];
            }
        } catch (apiError) {
            if (apiError.response && apiError.response.status === 404) {
                // El Pokémon no se encontró en la API, dejamos pokemonData como null
            } else {
                // Si hay algún otro error al hacer la solicitud a la API, lanzamos el error
                throw new Error("Error fetching data from API: " + apiError.message);
            }
        }
        
        
        return [pokemonData, ...pokemonDbObjects];
        
    }catch (error) {
        throw new Error("Error geting pokemons by Name: " + error.message);
    }
}

module.exports = {
    getAllPokemonsController,
    getByIdPokemonController,
    getByNamePokemonsController,
    createPokemonController
}