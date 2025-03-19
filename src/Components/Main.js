import React from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate(); 

  const handleReserve = () => {
    navigate('/reservations'); 
  };

  return (
    <main className="main">
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
            <p className="price"> $12.99</p>
          </div>
          <div className="specials-grid" column="3">
            <div className="special-item">
              <img src="/bruchetta.png" alt="Bruchetta" />
              <h3>Bruchetta</h3>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <p className="price"> $5.99</p>
            </div>
          </div>
          <div className="specials-grid" column="3">
            <div className="special-item">
              <img src="/lemondessert.jpg" alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <p className="price"> $5.00</p>
            </div>
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
    </main>
  );
};

export default Main;