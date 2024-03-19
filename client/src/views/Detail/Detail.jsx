import useDetail from "../../hooks/useDetail";

const Detail = () => {

    
    const { pokemonDetail, detailLoading, detailError } = useDetail();

    console.log(pokemonDetail);
    

    return (
        <div key={pokemonDetail.id}>
            {detailError && <h2>{error}</h2>}
            {detailLoading ? <h2>Loading...</h2>:pokemonDetail && (
                <div>
                    <h1>{pokemonDetail.name}</h1>
                    <img src={pokemonDetail.image} alt={pokemonDetail.name} />
                    <p>HP: {pokemonDetail.health}</p>
                    <p>Attack: {pokemonDetail.attack}</p>
                    <p>Defense: {pokemonDetail.defense}</p>
                    <p>Speed: {pokemonDetail.speed}</p>
                    <p>Height: {pokemonDetail.height}</p>
                    <p>Weight: {pokemonDetail.weight}</p>
                    <p>Types: {pokemonDetail.types && pokemonDetail.types.map((type) => <span key={type.id} >{type.name} </span>)}</p>
                </div>
            )}
    
        </div>
    );
    };

export default Detail;