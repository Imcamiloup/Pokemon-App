import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Importa el archivo CSS

const Landing = () => {
    return (
        <div className="landing-container">
            <h1 className="landing-title">¡Bienvenidos!</h1>
            <Link to='/home'>
                <button className="landing-button">Comenzar</button>
            </Link>
        </div>  
    );
};

export default Landing;
