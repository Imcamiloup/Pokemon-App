import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllPokemons, getPokemonsByFilter } from "../../Redux/pokemonsSlice";
import useTypes from "../../hooks/useTypes";
import { useEffect } from "react";




const FilterBar = ({ pokemons}) => {

    const { types } = useTypes();

    const copyPokemons =useSelector((state) => state.pokemon.pokemonsByFilter);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonsByFilter(pokemons));
        return ()=> fetch('http://localhost:3001/pokemons')
        .then((response) => response.json())
        .then((data) => {
            dispatch(getAllPokemons(data));
        })
    }, []);

    console.log('copy:',copyPokemons)
    console.log('pokemons:',pokemons)
   
    const handleInputChange = (type) => {
        const typesFiltered = pokemons.filter((pokemon) =>
          pokemon.types.some((pokemonType) => pokemonType.name === type)
        );
        dispatch(getAllPokemons(typesFiltered));
      };


  return (
    <div>
        {types.map((type) => {
            return (
                <button key={type.id} value={type.name} onClick={()=>handleInputChange(type.name)} > {type.name} </button>
            )
        })}
    </div>
  );
}

export default FilterBar;