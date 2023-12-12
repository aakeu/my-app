// import { View, Text } from 'react-native'
import React from 'react';
import { Link } from 'react-router-dom'; 

import Nav from './Nav';
import headpics from "../src/images/headpics.jpg"


import './App.css';

const Header = () => {
  return (
    <>
    <div className="containerHeader">
      <Nav />
      <div className='HeadBox'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>We are a family owned company <br></br>
        Medditeerranean restaurant <br></br>
        focused on tradition <br></br>
        recipe saved with a modern<br></br>
        twist.</p>
      </div>
      <div className='containerReserve'>
      <Link to="/reservation" >
        <h4>Reserve a table</h4>
      </Link>
      </div>
      <div className='picsBox'>
      <img
      src={headpics}
      alt="picture of delicious meal"
      className='headPics'/>
      </div>
    </div>
    </>
  );
}

export default Header;


