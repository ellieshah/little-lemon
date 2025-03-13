import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling
import logo from './logo.png'; // Replace with your logo path

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Menu</a></li>
                    <li><a href="#contact">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
        </header>
    );
};

export default Header;