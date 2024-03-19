import React from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div >
            <h1 >¡Bienvenidos!</h1>
            <Link to='/home'>
                <button >Comenzar</button>
            </Link>
        </div>  
    );
};

export default Landing;