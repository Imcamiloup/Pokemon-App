
import useDetail from "../../hooks/useDetail";
import "./Detail.css";

const Detail = () => {

    
    const { pokemonDetail, detailLoading, detailError } = useDetail();

    // Función para calcular el porcentaje
    const calculatePercentage = (value , max) => {
        return (value / max) * 100 + "%";
    };
    

    return (
        <div key={pokemonDetail.id} className="detail-component"> 
            {detailError && <h2>{error}</h2>}
            {detailLoading ? <h2>Loading...</h2>:pokemonDetail && (
                <div className="detail-container">
                    <div className="title-container">
                        <h1>{pokemonDetail.name}</h1>
                    </div>
                    <div></div>
                    <div>
                        <img src={pokemonDetail.image} alt={pokemonDetail.name} className="img-detail"/>
                    </div>
                    <div>
                        <div className="middle">
                            <label>HP: {pokemonDetail.health}</label>
                            <div className="bar-container" >
                                <div className="bar-health" style={{
                                        width: calculatePercentage( pokemonDetail.health, 255)}}></div>
                            </div>
                        </div>
                        <div className="middle">
                            <label>Attack: {pokemonDetail.attack}</label>
                            <div className="bar-container">
                                <div className="bar-attack" style={{
                                        width: calculatePercentage( pokemonDetail.attack,255)}}></div>
                            </div>
                        </div>
                        <div className="middle">
                            <label>Defense: {pokemonDetail.defense}</label>
                            <div className="bar-container">
                                <div className="bar-defense" style={{
                                        width: calculatePercentage( pokemonDetail.defense,255)}}></div>
                            </div>
                        </div>
                        <div className="middle">
                            <label>Speed: {pokemonDetail.speed}</label>
                            <div className="bar-container">
                                <div className="bar-speed" style={{
                                        width: calculatePercentage( pokemonDetail.speed,255)}}></div>
                            </div>
                        </div>
                        <div className="middle">
                            <label>Height: {pokemonDetail.height}</label>
                            <div className="bar-container">
                                <div className="bar-height" style={{
                                        width: calculatePercentage( pokemonDetail.height,255)}}></div>
                            </div>
                        </div>
                        <div className="middle">
                            <label>Weight: {pokemonDetail.weight}</label>
                            <div className="bar-container">
                                <div className="bar-weight" style={{
                                        width: calculatePercentage( pokemonDetail.weight,10000)}}></div>
                            </div>
                        </div>
                    </div>                        
                        <div>
                            <p className="types-detail"> {pokemonDetail.types && pokemonDetail.types.map((type) => <span className={type.name} key={type.id} >{type.name} </span>)}</p>
                        </div>
                    
                </div>
            )}
    
        </div>
    );
    };

export default Detail;