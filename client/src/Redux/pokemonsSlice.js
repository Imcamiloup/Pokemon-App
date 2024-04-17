import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokemons: [],
  allTypes: [],
  pokemonDetail: {},
  pokemonsByFilter: [],
};

//reducer and actions for state allProducts changes
const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getAllPokemons: (state, action)=> {
      state.allPokemons = action.payload; 
    },
    getValueTypes(state, action) {
      state.allTypes = action.payload;
    },
    getPokemonDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
    getPokemonsByFilter: (state, action) => {
      state.pokemonsByFilter = action.payload;
    },

  },
}); 

export const { getAllPokemons,
               getValueTypes, 
               getPokemonDetail, 
               getPokemonsByFilter,
              } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
