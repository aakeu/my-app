import React from 'react'
import './App.css';
import logo from "../src/images/logo.jpg"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className='logo2Div'>
            <img 
            src={logo}
            alt="company logo"
            className='logo2'/>
        </div>
        <div className='navDiv'>
         <h3>Navigation</h3>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About.js">About</Link></li>
            <li><a href='Menu.js'></a>Menu</li>
            <li><a href='Reservation.js'></a>Reservation</li>
            <li><a href='Order-Online.js'></a>Order Online</li>
            <li><a href='Login.js'></a>Login</li>
            </ul> 
        </div>
        <div className='contactDiv'>
            <h3>Contact</h3>
            <p>
                Address
            </p>
            <p>
                Phone Number
            </p>
            <p>
                Email
            </p>
        </div>
        <div className='mediaDiv'>
            <h3> Social Media Links </h3>
            <p>
                Address
            </p>
            <p>
                Phone Number
            </p>
            <p>
                Email
            </p>
        </div>
    </div>
    </>
  )
}

export default Footer
