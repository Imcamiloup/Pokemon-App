
import {  getAllPokemons, getPokemonsSort } from "../../Redux/pokemonsSlice";
import { useDispatch} from "react-redux";

import './SortBar.css';

const SortBar = ({ orderAZ, orderID, setOrderAZ, setOrderID, pokemons}) => {

    const pokemonsCopy = [...pokemons];
    const dispatch = useDispatch();

    const alphabeticalOrder = (order) => {
        if(order === 'A-Z') {
            pokemonsCopy.sort((a, b) => {
                return b.name.localeCompare(a.name);
            });

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
            pokemonsCopy.sort((a, b) => b.attack - a.attack);
            return pokemonsCopy;
        } if(order === 'DESC') {
            pokemonsCopy.sort((a, b) => a.attack - b.attack);
            return pokemonsCopy;
        }
    }


    const handleAlphabeticalOrder = (e) => {
        const order = e.target.value;
        setOrderAZ(order);
        const ordered = alphabeticalOrder(orderAZ);
        dispatch(getAllPokemons(ordered));
    }

    const handleIdOrder = (e) => {
        const order = e.target.value;
        setOrderID(order);
        const ordered = idOrder(orderID);
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
                    <option value="ASC">Less Attack</option>
                    <option value="DESC">More Attack</option>
                </select>
            </div>
            
        </div>
    );
    }

export default SortBar;