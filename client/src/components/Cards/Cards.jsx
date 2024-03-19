import Card from './../Card/Card';
import useFetch from '../../hooks/usePokemons';



const Cards = () => {
    const {pokemons, loading, error } = useFetch();
    console.log(pokemons);
    return (
        <div>
            {error && <h2>{error}</h2>}
            {loading? <h2>Loading...</h2>: pokemons.map((pokemon) => {
                return (
                    <Card  key={pokemon.id} pokemon={pokemon} />
                )
            })}

        </div>
      );
    }

export default Cards;