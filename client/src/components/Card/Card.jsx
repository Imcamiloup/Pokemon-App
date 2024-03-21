import { NavLink } from "react-router-dom";
import './Card.css';



const Card  = ({pokemon}) => {

    const {id, name, image} = pokemon;


    const setEmpty =[]
    return (
        
        
         <NavLink to={`/detail/${id}`} >
         <button >
            <div key={id} className="card-container" >
                <div className="img-container">
                    <img src={image} alt={name} className="img"/>
                </div>
                <div className="info-container">
                    <b > <h2>{name}</h2> </b>

                    <span className="types-container">
                    {pokemon.types.length > 0 ? 
                    pokemon.types.map((type) =>  <p className={type.name} key={type.id} >{type.name} </p>)
                :<p className="unknown">  </p>
                }
                    </span>
    
                </div>
            </div>
         </button>
        </NavLink>
        
    );
}

export default Card;