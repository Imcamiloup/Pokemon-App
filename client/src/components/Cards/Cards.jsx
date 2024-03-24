import Card from './../Card/Card';
import useFetch from '../../hooks/usePokemons';
import PaginateBar from '../PaginateBar/PaginateBar';
import FilterBar from '../FilterBar/FilterBar';
import SearchBar from '../SearchBar/SearchBar';
import SortBar from '../SortBar/SortBar';
import { useState } from 'react';
import './Cards.css';


const Cards = () => {

    const {pokemons, loading, error, types } = useFetch();
    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [orderAZ, setOrderAZ] = useState('A-Z');
    const [orderID, setOrderID] = useState('ASC');
    console.log(pokemons);

    const indexFinal = currentPage * limit;
    const indexStart = indexFinal - limit;

    const nPokemons = pokemons.slice(indexStart, indexFinal);
    const nPages = Math.ceil(pokemons.length / limit);



    return (
        <div className='allcards-container'>
            < SortBar setOrderAZ={setOrderAZ}
                     setOrderID={setOrderID} 
                     pokemons = {pokemons}
                     orderAZ={orderAZ}
                     orderID={orderID} />
            <FilterBar setCurrentPage={setCurrentPage}
                       pokemons = {pokemons} />
            <SearchBar setCurrentPage={setCurrentPage} pokemons = {pokemons}/>
            <PaginateBar 
            currentPage={currentPage}  
            setCurrentPage = {setCurrentPage} 
            nPages={nPages}
            limit={limit}
            setLimit={setLimit} />
            
            {error && <h2>{error}</h2>}
            {loading? <h2>Loading...</h2>: nPokemons.map((pokemon) => {
                return ( 
                    <Card className="cards-place" key={pokemon.id} pokemon={pokemon} />
                )
            })}

        </div>
      );
    }

export default Cards;