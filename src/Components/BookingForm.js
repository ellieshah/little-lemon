import React, { useState, useEffect, useCallback } from 'react';
import './BookingForm.css';

const BookingForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false); // Track if API is loaded

  // Check if API is loaded
  useEffect(() => {
    const checkApiLoaded = () => {
      if (window.fetchData) {
        setIsApiLoaded(true);
      } else {
        setTimeout(checkApiLoaded, 100); // Retry every 100ms
      }
    };
    checkApiLoaded();
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const initializeTimes = useCallback(async () => {
    if (!isApiLoaded) {
      setError('API not loaded yet');
      return;
    }
    try {
      const today = getTodayDate();
      const times = await window.fetchData(today);
      setAvailableTimes(times || []);
      setError(null);
      return times;
    } catch (error) {
      console.error('Error initializing times:', error);
      setAvailableTimes([]);
      setError('Could not load available times');
      return [];
    }
  }, [isApiLoaded]);

  const updateTimes = async (selectedDate) => {
    if (!isApiLoaded) {
      setError('API not loaded yet');
      return;
    }
    try {
      const times = await window.fetchData(selectedDate);
      setAvailableTimes(times || []);
      setError(null);
      return times;
    } catch (error) {
      console.error('Error updating times:', error);
      setAvailableTimes([]);
      setError('Could not load available times');
      return [];
    }
  };

  useEffect(() => {
    if (isApiLoaded) {
      initializeTimes();
    }
  }, [isApiLoaded, initializeTimes]);

  useEffect(() => {
    if (formData.date && isApiLoaded) {
      updateTimes(formData.date);
    } else if (!formData.date) {
      setAvailableTimes([]);
      setError(null);
    }
  }, [formData.date, isApiLoaded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isApiLoaded) {
      setError('API not loaded yet');
      return;
    }
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        disabled={!availableTimes.length}
      >
        {availableTimes.length > 0 ? (
          availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))
        ) : (
          <option value="">Select a time</option>
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Graduation">Graduation</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;