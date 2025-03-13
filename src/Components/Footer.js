import React from 'react';
import './Footer.css'; 

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
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Menu</a></li>
            <li><a href="/products">Reservations</a></li>
            <li><a href="/blog">Login</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@yourcompany.com">info@littlelemon.com</a>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;