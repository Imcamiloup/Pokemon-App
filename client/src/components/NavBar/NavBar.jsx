import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';


const NavBar = () => {




  return (
    <div className="navbar">
        
      <Link to="/home" className="navbar-link" >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" className='img1'></img>
      <img src="https://pokedex-bice-five.vercel.app/logo.png" className='img2'></img>
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/create" className="navbar-link">
        Create
      </Link>
      
    </div>
  );
}

export default NavBar;
