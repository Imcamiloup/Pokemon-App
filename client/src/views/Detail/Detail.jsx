import useDetail from "../../hooks/useDetail";
import "./Detail.css";

const Detail = () => {

    
    const { pokemonDetail, detailLoading, detailError } = useDetail();

    console.log(pokemonDetail);
    

    return (
        <div key={pokemonDetail.id} className="detail-container"> 
            {detailError && <h2>{error}</h2>}
            {detailLoading ? <h2>Loading...</h2>:pokemonDetail && (
                <div>
                    <h1>{pokemonDetail.name}</h1>
                    <img src={pokemonDetail.image} alt={pokemonDetail.name} className="img"/>
                    <p>HP: {pokemonDetail.height}</p>
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