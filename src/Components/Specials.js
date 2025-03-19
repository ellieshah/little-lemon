import React from 'react';
import './Specials.css';

const Specials = () => {
  return (
      <div className="specials-section">
        <h2>This week's specials!</h2>
        <button className="specials-online-button">Online Menu</button>
        <div className="specials-grid" column="3">
          <div className="special-item1">
            <img src="/greeksalad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p className="price"> $12.99</p>
          </div>
          <div className="specials-grid" column="3">
            <div className="special-item2">
              <img src="/bruchetta.png" alt="Bruchetta" />
              <h3>Bruchetta</h3>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <p className="price"> $5.99</p>
            </div>
          </div>
          <div className="specials-grid" column="3">
            <div className="special-item3">
              <img src="/lemondessert.jpg" alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <p className="price"> $5.00</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Specials;