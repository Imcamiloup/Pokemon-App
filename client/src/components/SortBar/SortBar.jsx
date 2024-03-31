
import {  getAllPokemons, getPokemonsSort } from "../../Redux/pokemonsSlice";
import { useDispatch, useSelector } from "react-redux";

import './SortBar.css';

const SortBar = ({ orderAZ, orderID, setOrderAZ, setOrderID, pokemons}) => {

    const pokemonsCopy2 = useSelector((state) => state.pokemon.pokemonsOrder);
    const pokemonsCopy = [...pokemons];
    const dispatch = useDispatch();

    const alphabeticalOrder = (order) => {
        if(order === 'A-Z') {
            pokemonsCopy.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
            console.log('pokemonsCopy:', pokemonsCopy)
            return pokemonsCopy;
        } if (order === 'Z-A') {
            pokemonsCopy.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            return pokemonsCopy;
        }
    }

    const idOrder =  (order) => {
        if(order === 'ASC') {
            pokemonsCopy.sort((a, b) => b.id - a.id);
            return pokemonsCopy;
        } if(order === 'DESC') {
            pokemonsCopy.sort((a, b) => a.id - b.id);
            return pokemonsCopy;
        }
    }


    const handleAlphabeticalOrder = (e) => {
        const order = e.target.value;
        setOrderAZ(order);
        console.log('order:', order)
        const ordered = alphabeticalOrder(orderAZ);
        console.log('orderedAlph:', ordered)
        dispatch(getAllPokemons(ordered));
    }

    const handleIdOrder = (e) => {
        const order = e.target.value;
        setOrderID(order);
        const ordered = idOrder(orderID);
        console.log('orderedID:', ordered)
        console.log('order:', order)
        dispatch(getAllPokemons(ordered));

    }

    return (
        <div className="sortbar">
            <div className="title">Ordenar por:</div>  
            <div className="select-container">
                <select value={orderAZ} onChange={ handleAlphabeticalOrder } >
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select value={orderID} onChange={handleIdOrder}>
                    <option value="ASC">Ascendente</option>
                    <option value="DESC">Descendente</option>
                </select>
            </div>
            
        </div>
    );
    }

export default SortBar;