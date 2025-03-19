import React from 'react';
import './Footer.css';  // Assuming you have a CSS file for styling 
import { Link } from 'react-router-dom';

// Import social media icons from a library like react-icons
// npm install react-icons --save
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="./FooterLogo.png" alt="Little Lemon Logo" />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;