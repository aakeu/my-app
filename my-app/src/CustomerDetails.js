

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const CustomerDetails = () => {
    const navigate = useNavigate();

  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  // Event handlers for form fields
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for submitting customer details here

    // Redirect to the confirmation page or any other desired page

    navigate('/PaymentPage');
  };

  return (
<>
<Nav />
    <div className="customerDetailsContainer">

      <h2>Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="contactInfo">Contact Information *</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={handleContactInfoChange}
            required
          />
        </div>

        <button type="submit">Submit Customer Information</button>
      </form>
    </div>
    </>
  );
};

export default CustomerDetails;
