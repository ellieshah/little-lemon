import { submitAPI } from '../api';
import React from 'react';
import './BookingPage.css'; 
import BookingForm from './BookingForm';

const BookingPage = () => {
  const submitForm = async (formData) => {
    console.log('Form submitted with data:', formData);
    const success = await submitAPI(formData);
    if (success) {
      alert('Your reservation has been confirmed!');
    } else {
      alert('There was an issue with your reservation. Please try again.');
    }
  };
  return (
    <section className="booking-page" role="region" aria-label="booking">
      <div className="booking-header">
        <h1>Reserve Your Table</h1>
      </div>
      <BookingForm submitForm={submitForm} />
      <div className="booking-footer">

      </div>
    </section>
  );
};

export default BookingPage;