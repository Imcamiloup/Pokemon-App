import { NavLink } from "react-router-dom";

const Card  = ({pokemon}) => {

    const {id, name, image} = pokemon;



    return (
        <div  key={id}>
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                </div>
                <div className="card-name">
                    <h2>{name}</h2>
                </div>

                <NavLink to={`/detail/${id}`} >
                    <button className="card-button">+</button>
                </NavLink> 
            </div>
        </div>
    );
}

export default Card;