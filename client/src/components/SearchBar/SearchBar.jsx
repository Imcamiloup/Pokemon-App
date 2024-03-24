import {  getAllPokemons, getPokemonsByName } from "../../Redux/pokemonsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './SearchBar.css'

const SearchBar = ({pokemons, setCurrentPage}) => {

    const copyPokemons2 =useSelector((state) => state.pokemon.pokemonsByName);

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleChangeInput = (e) => {
        event.preventDefault();
        setInput(e.target.value);
    }

    const handleSubmit =  async () => {
        const response = await fetch(`http://localhost:3001/pokemons/name/${input}`)
        const data = await response.json()
        console.log('data:',data)
        dispatch(getAllPokemons(data))
        setCurrentPage(1);
    } 

    return (
        <div className="search-container">
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleChangeInput(e)}
            className="search-input"
        />
        <button className="search-submit" onClick={ ()=> handleSubmit() } >Search</button>
        </div>
    );
    }

export default SearchBar;