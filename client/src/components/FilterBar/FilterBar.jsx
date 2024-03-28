import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllPokemons, getPokemonsByFilter } from "../../Redux/pokemonsSlice";
import useTypes from "../../hooks/useTypes";
import { useEffect } from "react";
import './FilterBar.css';




const FilterBar = ({ pokemons, setCurrentPage}) => {

    const { types } = useTypes();

    const copyPokemons =useSelector((state) => state.pokemon.pokemonsByFilter);
    
    const dispatch = useDispatch();


    const getPokemons = async () => {
        const response = await fetch('http://localhost:3001/pokemons')
        const data = await response.json()
        dispatch(getPokemonsByFilter(data))
    }

    useEffect(() =>  {
        getPokemons()
    }, [pokemons])

    const handleInputChange = (type) => {
        const typesFiltered = copyPokemons.filter((pokemon) =>
          pokemon.types.some((pokemonType) => pokemonType.name === type)
        );
        dispatch(getAllPokemons(typesFiltered));
        setCurrentPage(1);
      };


  return (
    <div className="container-buttons">
        <div className="button-list">
        <div  className="card-button">
            <button className="button-filter" onClick={()=>dispatch(getAllPokemons(copyPokemons))}>All</button>
        </div>
        {types.map((type) => {
            return (
                <div key={type.id} className="card-button">
                    <button className="button-filter"  value={type.name} onClick={()=>handleInputChange(type.name)} > {type.name} </button>
                </div>
            )
        })}
    </div>
    </div>
    
  );
}

export default FilterBar;