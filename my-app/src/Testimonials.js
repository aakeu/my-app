// import React from 'react'
import React, { useState, useEffect } from 'react';
import './App.css';
import Special3 from "../src/images/Special3.jpg"
import Special4 from "../src/images/Special4.jpg"

const customerReviews = [
    {
      review: "The quintessential nature of delivery is beyond professional, a broad and thorough service and meal are given. The atmosphere and live music in their restaurants are one of a kind.",
      name: "Both Kalmbach",
      location: "Trillott"
    },
    {
      review: "Another great experience with their delivery service! The food is always fresh, and the delivery is fast. Highly recommend!",
      name: "Alice Thompson",
      location: "Cityville"
    },
    {
      review: "I love the variety of dishes they offer. The taste is exquisite, and the presentation is top-notch. Will definitely order again!",
      name: "John Rodriguez",
      location: "Sunnydale"
    },
    {
      review: "Exceptional service! The staff is friendly, and the ambiance is perfect for a family dinner. Can't wait to visit again!",
      name: "Emily Smith",
      location: "Meadowville"
    },
    {
      review: "The delivery was prompt, and the food exceeded my expectations. A delightful experience overall!",
      name: "David Miller",
      location: "Harbor City"
    }
  ];


const Testimonials = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) =>
          prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 20000); // Change the interval as needed (in milliseconds)
  
      return () => clearInterval(interval);
    }, []);

  return (
    <>
        <div className='testimonialBlock'>
            <h4>Testimonials</h4>
            <div className='reviewBlock'>
            <p>{customerReviews[currentReviewIndex].review}</p>
          <h3>
            {customerReviews[currentReviewIndex].name},{' '}
            {customerReviews[currentReviewIndex].location}
          </h3>
            </div>
        </div>
        <div className='advertBlock'>
        <div className='advertDiscription'>
            <div className='brandName'>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            </div>
            <p>We promosing you a  good time <br></br>
            Dinning with us, our dishes we are given<br></br>
            Five-star review from our esteem<br></br>
            customers. Our dedication is to you, <br></br>we promise to bring you the <br></br>
            best of dished every day.
            <br></br>Every first time customer will be<br></br>
            given our best signature dessert,<br></br> free on the house and every<br></br>
            free on the house and every<br></br>occasion you celebrate with us,<br></br>will always be memorable</p>
        </div>
        <div>
        <img 
        src={Special3}
        alt="picture of cursine"
        className='cursine1'/>
      
        <img 
        src={Special4}
        alt="picture of cusine"
        className='cursine2'/>
       
        </div>
        </div>
        
        
    </>
  )
}

export default Testimonials