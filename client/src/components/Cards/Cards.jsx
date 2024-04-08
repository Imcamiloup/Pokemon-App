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
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [orderAZ, setOrderAZ] = useState('A-Z');
    const [orderID, setOrderID] = useState('ASC');

    const indexFinal = currentPage * limit;
    const indexStart = indexFinal - limit;

    const nPokemons = pokemons.slice(indexStart, indexFinal);
    const nPages = Math.ceil(pokemons.length / limit);



    return (
        <div className='cards' >
            <div className='filters-container'>
                <FilterBar setCurrentPage={setCurrentPage}
                        pokemons = {pokemons} />
            </div>
            <div>
                <SearchBar setCurrentPage={setCurrentPage} pokemons = {pokemons}/>
            </div>
            <div className='settings-container'>
                < SortBar setOrderAZ={setOrderAZ}
                            setOrderID={setOrderID} 
                            pokemons = {pokemons}
                            orderAZ={orderAZ}
                            orderID={orderID} />
                    <PaginateBar 
                    className='paginate-bar'
                    currentPage={currentPage}  
                    setCurrentPage = {setCurrentPage} 
                    nPages={nPages}
                    limit={limit}
                    setLimit={setLimit} />  
            </div>
            {loading? <div className='loader'></div>:  pokemons[0]==null ?  <h2>POKEMON DON'T EXIST</h2> : 
                <div className='cards-place'>
                    {nPokemons.map((pokemon) => {
                    return ( 
                        <Card  key={pokemon.id} pokemon={pokemon} />
                    )
                })}
                </div>
                
                }      
            
         

        </div>
      );
    }

export default Cards;