import React from 'react';
import './BookingPage.css'; // Optional styling
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <section className="booking-page">
      <div className="booking-header">
        <h1>Reserve Your Table</h1>
        <p>Book a spot at Little Lemon and enjoy a Mediterranean experience!</p>
      </div>
      <BookingForm />
      <div className="booking-footer">
        <p>We look forward to serving you!</p>
      </div>
    </section>
  );
};

export default BookingPage;