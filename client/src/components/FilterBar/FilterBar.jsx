import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllPokemons, getPokemonsByFilter } from "../../Redux/pokemonsSlice";
import useTypes from "../../hooks/useTypes";
import { useEffect, useState } from "react";
import './FilterBar.css';




const FilterBar = ({ pokemons, setCurrentPage}) => {

    const { types } = useTypes();

    const copyPokemons =useSelector((state) => state.pokemon.pokemonsByFilter);

    const [activeButton, setActiveButton] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(() =>  {
        getPokemons()
    }, [pokemons])

    const getPokemons = async () => {
        const response = await fetch('http://localhost:3001/pokemons')
        const data = await response.json()
        dispatch(getPokemonsByFilter(data))
    }


    const handleInputChange = (type,boton) => {
        const typesFiltered = copyPokemons.filter((pokemon) =>
          pokemon.types.some((pokemonType) => pokemonType.name === type)
        );
        dispatch(getAllPokemons(typesFiltered));
        setActiveButton(boton);
        setCurrentPage(1);
      };

      
      

        const handleAllFilter = () => {
          dispatch(getAllPokemons(copyPokemons));
          setActiveButton('all');
        };
        

  return (
    
        <ul className="button-list" id="botones">
            <div  className="card-button">
                <button className={`button-filter ${activeButton === "all" ? "active-button" : ""}`}
                         onClick={ ()=> handleAllFilter() }>All </button>
            </div>
            {types.map((type) => {
                return (
                    <div key={type.id} className="card-button">
                        <button
                            className={`button-filter ${activeButton === type.name ? "active-button" : ""}`}
                            onClick={() => handleInputChange(type.name, type.name)}
                        >
                            {type.name}
                        </button>
                    </div>
                )
            })}
        </ul>
    
    
  );
}

export default FilterBar;