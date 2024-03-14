const { Type } = require('../db.js');
const axios = require('axios');

const getTypesApi = async () => {
    const types = await axios.get('https://pokeapi.co/api/v2/type');
    const typesResults = types.data.results;
    const typesResultsArray = typesResults.map((type) => (type.name));
    return typesResultsArray;
}

const getAllTypesController = async () => {

    const typesApi = await getTypesApi();

    typesApi.forEach(async (type) => {
        if (!await Type.findOne({where: {name: type}}))
        await Type.create({name: type});
    });
    
    responseDb = await Type.findAll();

    const typesDb = responseDb.map(t => {
        return {
            id: t.id,
            name: t.name
        }
    });

    return typesDb;
}

module.exports = {
    getAllTypesController
}