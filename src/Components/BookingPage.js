import React from 'react';
import './BookingPage.css'; 
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <section className="booking-page" role="region" aria-label="booking">
      <div className="booking-header">
        <h1>Reserve Your Table</h1>
      </div>
      <BookingForm />
      <div className="booking-footer">

      </div>
    </section>
  );
};

export default BookingPage;