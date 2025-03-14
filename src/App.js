import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/menu" element={<div>Menu</div>} />
          <Route path="/reservations" element={<div>Reservations</div>} />
          <Route path="/order-online" element={<div>Order Online</div>} />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;