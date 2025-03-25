import React, { useState, useEffect, useCallback } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };


  const initializeTimes = useCallback(async () => {
    try {
      const today = getTodayDate();
      console.log('Fetching times for today:', today);
      const times = await window.fetchData(today);
      console.log('Times fetched:', times);
      setAvailableTimes(times || []);
      return times;
    } catch (error) {
      console.error('Error initializing times:', error);
      setAvailableTimes([]);
      return [];
    }
  }, []);

  const updateTimes = async (selectedDate) => {
    try {
      console.log('Fetching times for date:', selectedDate);
      const times = await window.fetchData(selectedDate);
      console.log('Times fetched:', times);
      setAvailableTimes(times || []);
      return times;
    } catch (error) {
      console.error('Error updating times:', error);
      setAvailableTimes([]);
      return [];
    }
  };

  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  useEffect(() => {
    if (formData.date) {
      updateTimes(formData.date);
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for ${formData.occasion}`);
  };
  useEffect(() => {
    console.log('Current availableTimes:', availableTimes);
  }, [availableTimes]);

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required disabled={!availableTimes.length}>
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => <option key={time} value={time}>{time}</option>)
        ) : (
          <option value="">No available times</option>
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} required />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Graduation">Graduation</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;