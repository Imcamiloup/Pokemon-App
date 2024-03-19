import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonsSlice.js";

const store = configureStore({
    reducer: {
        pokemon: pokemonsReducer,
    },
});

export default store;