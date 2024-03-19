import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPokemons: [],
  allBrands: [],
  pokemonDetail: {},
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
      state.allPokemons = action.payload;
    },
    getPokemonDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
  },
});

export const { getAllPokemons, getValueTypes, getPokemonDetail} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
