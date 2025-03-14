import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
       <Link to="/" className="nav-item">Home</Link>
       <Link to="/about" className="nav-item">About</Link>
       <Link to="/menu" className="nav-item">Menu</Link>
       <Link to="/reservations" className="nav-item">Reservations</Link>
       <Link to="/order-online" className="nav-item">Order Online</Link>
       <Link to="/login" className="nav-item">Login</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<div>About Us</div>} />
          {/* Add other routes here */}
        </Routes>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
