import React from 'react';
import './Main.css';

const Main = () => {
  const handleReserve = () => {
    alert('Table reserved!');
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
    </main>
  );
};

export default Main;