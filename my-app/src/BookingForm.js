
import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import headpics from "../src/images/headpics.jpg";
import "./App.css"

const BookingForm = () => {
  // State variables for form fields
 
  const navigate = useNavigate();
  const [date, setDate] = useState(''); // Default date is an empty string
  const [time, setTime] = useState(''); // Default time is an empty string
  const [guests, setGuests] = useState(1); // Default number of guests
  const [occasion, setOccasion] = useState(''); // Default occasion is an empty string
  const [seating, setSeating] = useState('Standard'); // Default seating option

  // State variable for available times
  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Event handlers for form fields
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value, 10));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSeatingChange = (e) => {
    setSeating(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', { date, time, guests, occasion });
    navigate('/CustomerDetails');

  
  };

  return (
    <>
      <div className='bookingContianer'>
        <div className='HeadBox1'>
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>Find a table for any Occasion</p>
        </div>

        <div className='picsBooking1'>
          <img
            src={headpics}
            alt="picture of delicious meal"
            className='bookingPics' />

          <img
            src={headpics}
            alt="picture of delicious meal"
            className='bookingPics1' />
        </div>

        <form  onSubmit={handleSubmit}>
         <div className='dateTimeDiv'>
             <div className='dateDiv'>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
            </div>
            <div className='timeDiv'>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={handleTimeChange} required>
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>{timeOption}</option>
                    ))}
                 </select>
            </div>
        </div>
        <div className='guestOcassionDiv'>
        <div className='guestNumber'>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required />
        </div>
        <div className='occassionDiv'>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
            <option value="" disabled>Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Date Night">Date Night</option>
          </select>
        </div>
        </div>
        <div className='seatingDiv'>
          <label>Seating Options</label>
          <div>
            <div>
            <label>
              <input
                type="radio"
                value="Standard"
                checked={seating === 'Standard'}
                onChange={handleSeatingChange}
              />
              Standard
            </label>
            </div>
            <div>
            <label>
              <input
                type="radio"
                value="Outside"
                checked={seating === 'Outside'}
                onChange={handleSeatingChange}
              />
              Outside
            </label>
            </div>
          </div>
        </div>
        
          <input type="submit"  className='sumbitButton' value="Make Your Reservation"/>
         
        </form>
      </div>
    </>
  );
};

export default BookingForm;
