

import React from 'react';
import logo from "../src/images/logo.jpg"
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className="navContainer">
      <img
        src={logo}
        alt="company logo"
        className='imgLogo'
      />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
    </>
  );
}

export default Nav;

