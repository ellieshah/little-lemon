import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import About from './Components/About';
import BookingPage from './Components/BookingPage';
import Specials from './Components/Specials';
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order-online" element={<div>Order Online</div>} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;