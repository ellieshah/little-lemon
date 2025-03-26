import React, { useState, useEffect } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const Main = ({ showBookingForm = false }) => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    const checkApiLoaded = () => {
      if (window.submitAPI) {
        setIsApiLoaded(true);
      } else {
        setTimeout(checkApiLoaded, 100);
      }
    };
    checkApiLoaded();
  }, []);

  const handleReserve = () => {
    navigate('/reservations');
  };

  const submitForm = async (formData) => {
    if (!isApiLoaded) {
      alert('API not loaded yet');
      return;
    }
    try {
      const result = await window.submitAPI(formData);
      console.log('Submit API result:', result);
      if (result === true) {
        setIsConfirmed(true);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const closePopup = () => {
    setIsConfirmed(false);
    setTimeout(() => navigate('/'), 300);
  };

  return (
    <main className="main">
      {showBookingForm ? (
        <section className="booking-section">
          <h1>Reserve a Table</h1>
          <BookingForm submitForm={submitForm} />
          {isConfirmed && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2>Booking Confirmed!</h2>
                <p>Your reservation has been successfully made. We look forward to seeing you!</p>
                <button onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="main-hero">
            <div className="main-content">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>
                We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              </p>
              <button className="reserve-button" onClick={handleReserve}>
                Reserve a Table
              </button>
            </div>
            <div className="main-image">
              <img src="/restauranfood.jpg" alt="Restaurant Food" />
            </div>
          </section>
          <div className="specials-section">
            <h2>This week's specials!</h2>
            <button className="specials-online-button">Online Menu</button>
            <div className="specials-grid" column="3">
              <div className="special-item">
                <img src="/greeksalad.jpg" alt="Greek Salad" />
                <h3>Greek Salad</h3>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <p className="price">$12.99</p>
              </div>
              <div className="special-item">
                <img src="/bruchetta.png" alt="Bruchetta" />
                <h3>Bruchetta</h3>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <p className="price">$5.99</p>
              </div>
              <div className="special-item">
                <img src="/lemondessert.jpg" alt="Lemon Dessert" />
                <h3>Lemon Dessert</h3>
                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <p className="price">$5.00</p>
              </div>
            </div>
          </div>
          <section className="about-section">
            <div className="about-content">
              <div className="about-text">
                <h1>About Us</h1>
                <p>
                  Little Lemon is a charming family-owned Mediterranean restaurant located in the heart of Chicago. 
                  We focus on traditional recipes with a modern twist, using only the freshest ingredients to ensure 
                  an authentic and unforgettable dining experience.
                </p>
                <p>
                  Founded by two Italian brothers, Mario and Adrian, Little Lemon brings the flavors of the 
                  Mediterranean coast to your table, with each dish carefully crafted to transport you 
                  to the sunny shores of the Mediterranean Sea.
                </p>
              </div>
              <div className="about-images">
                <img src="./owner1.jpg" alt="Mario, co-owner of Little Lemon" className="owner-img" />
                <img src="./owner2.jpg" alt="Adrian, co-owner of Little Lemon" className="owner-img" />
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Main;