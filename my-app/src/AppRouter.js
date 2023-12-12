// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import OrderOnline from './OrderOnline';
import Login from './Login';
import CustomerDetails from './CustomerDetails'; 

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CustomerDetails" element={<CustomerDetails />} />
        </Routes>
      </Router>
    );
  };

export default AppRouter;
