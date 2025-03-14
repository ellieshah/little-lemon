import React from 'react';
import './Header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;