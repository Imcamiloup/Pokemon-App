import React, { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from "react-router-dom";
import './Card.css';



const Card  = ({pokemon}) => {

    const {id, name, image} = pokemon;

    const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar la apertura/cierre del modal

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    const setEmpty =[]
    return (
        
        
         <NavLink to={`/detail/${id}`} >
         <button >
            <div key={id} className="card-container" >
                <div className="img-container">
                    {image? <img src={image} alt={name} className="img"/>:
                    <img className='img-not' src="https://i.pinimg.com/originals/e2/10/ad/e210ad474121596da51be5efc16665c0.jpg" alt={name} />}
                </div>
                <div className="info-container">
                    <b > <h2>{name}</h2> </b>

                    <span className="types-container">
                    {pokemon.types ? 
                    pokemon.types.map((type) => <p className={type.name} key={type.id} >{type.name} </p>)
                :<h1 className="unknown"> Pokemon don't exist </h1>

                }
                    </span>
    
                </div>
            </div>
         </button>
        </NavLink>
        
    );
}

export default Card;