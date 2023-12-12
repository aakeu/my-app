import {  Text } from 'react'
import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'; 
import Special1 from "../src/images/Special1.jpg"
import Special2 from "../src/images/Special2.jpg"
import Special3 from "../src/images/Special3.jpg"


const Main = () => {
  return (
   <>
   <div className='mainContainer'>
    <div className='specialContainer'>
        <h2>
            This Weeks specials!
        </h2>
        
        <div className='onlineContainer'>
            <Link to="/order-online">
            <h4>
                Online Menu
            </h4>
            </Link>
        </div>
    </div>
    <div className='specialSection'>
    <div className='special1Container'>
        <img 
        src={Special1}
        alt="Special meal dish 1"
        className='special1'/>
        <div className='nameContainer'>
            <h4>Green Salad</h4>
            <p>$12.99</p>
        </div>
        <p className="explain">The famous greek salad of <br></br>
        crispy lettuce peppers, olives <br></br> and our Chicago style feta <br></br>
        cheese, garnished with <br></br> crunchy garlic and rosemary<br></br>
        croutons.</p>
       
            <h2 className='order'>Order a delivery  🛵</h2>
    </div>
    <div className='special1Container'>
        <img 
        src={Special2}
        alt="Special meal dish 2"
        className='special1'/>
        <div className='nameContainer'>
            <h4>Green Salad</h4>
            <p>$12.99</p>
        </div>
        <p className="explain">The famous greek salad of <br></br>
        crispy lettuce peppers, olives and our Chicago style feta <br></br>
        cheese, garnished with <br></br> crunchy garlic and rosemary<br></br>
        croutons.</p>
       
            <h2 className='order'>Order a delivery  🛵</h2>
    </div> 
    <div className='special1Container'>
        <img 
        src={Special3}
        alt="Special meal dish 4"
        className='special1'/>
        <div className='nameContainer'>
            <h4>Green Salad</h4>
            <p>$12.99</p>
        </div>
        <p className="explain">The famous greek salad of <br></br>
        crispy lettuce peppers, olives and our Chicago style feta <br></br>
        cheese, garnished with <br></br> crunchy garlic and rosemary<br></br>
        croutons.</p>
       
            <h2 className='order'>Order a delivery  🛵</h2>
    </div> 
    </div>
   </div>
   </>
  )
}

export default Main


