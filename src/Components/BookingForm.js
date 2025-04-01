import React, { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  VStack,
  Text,
} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import {
  NumberInput,
  NumberInputField,
} from '@chakra-ui/number-input';
import { Select } from '@chakra-ui/select';
import { fetchData } from '../api';

const BookingForm = ({ submitForm }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [error, setError] = useState(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [apiLoadAttempts, setApiLoadAttempts] = useState(0);
  const MAX_API_LOAD_ATTEMPTS = 50; // 5 seconds max (50 * 100ms)

  // Check if API is loaded
  useEffect(() => {
  const checkApiLoaded = () => {
    if (fetchData) {
      setIsApiLoaded(true);
    } else {
      if (apiLoadAttempts < MAX_API_LOAD_ATTEMPTS) {
        setApiLoadAttempts(prev => prev + 1);
        setTimeout(checkApiLoaded, 100);
      } else {
        setError('API failed to load. Please refresh the page and try again.');
      }
    }
  };
  checkApiLoaded();
 }, [apiLoadAttempts]);

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
      const times = await fetchData(today);
      setAvailableTimes(times || []);
      setError(null);
    } catch (error) {
      console.error('Error initializing times:', error);
      setAvailableTimes([]);
      setError('Could not load available times');
    }
  }, [isApiLoaded]);

  const updateTimes = useCallback(async (selectedDate) => {
    if (!isApiLoaded) {
      setError('API not loaded yet');
      return;
    }
    try {
      console.log ('Fetching times for date:', selectedDate); //Debug log
      const times = await fetchData(selectedDate);
      console.log ('Fetched times:', times); //Debug log
      setAvailableTimes(times || []);
      setError(null);
    } catch (error) {
      console.error('Error updating times:', error);
      setAvailableTimes([]);
      setError('Could not load available times');
    }
  }, [isApiLoaded]);

  useEffect(() => {
    if (isApiLoaded) {
      initializeTimes();
    }
  }, [isApiLoaded, initializeTimes]);

  const formik = useFormik({
    initialValues: {
      email: '',
      date: '',
      time: '',
      guests: 2,
      occasion: 'Birthday',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      date: Yup.date()
        .required('Date is required')
        .min(new Date().toISOString().split('T')[0], 'Date cannot be in the past'),
      time: Yup.string().required('Time is required'),
      guests: Yup.number()
        .required('Number of guests is required')
        .min(2, 'Minimum 2 guests')
        .max(10, 'Maximum 10 guests'),
      occasion: Yup.string().required('Occasion is required'),
    }),
    onSubmit: (values) => {
      if (!isApiLoaded) {
        setError('API not loaded yet');
        return;
      }
      submitForm(values);
    },
  });

  // Update available times when date changes
  useEffect(() => {
    if (formik.values.date && isApiLoaded) {
      updateTimes(formik.values.date);
    } else if (!formik.values.date) {
      setAvailableTimes([]);
      setError(null);
    }
  }, [formik.values.date, isApiLoaded, updateTimes]);

  return (
    <Box maxW="md" mx="auto" p={6} bg="gray.50" borderRadius="md" boxShadow="md">
      {error && (
        <Text color="red.500" mb={4} textAlign="center">
          {error}
        </Text>
      )}
      <form onSubmit={formik.handleSubmit} aria-label="On Click">
        <VStack spacing={4}>
          {/* Email Field */}
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              aria-required="true"
              aria-invalid={formik.touched.email && !!formik.errors.email}
              aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
            />
            <FormErrorMessage id="email-error">{formik.errors.email}</FormErrorMessage>
          </FormControl>

          {/* Date Field */}
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel htmlFor="res-date">Choose date</FormLabel>
            <Input
              type="date"
              id="res-date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-required="true"
              aria-invalid={formik.touched.date && !!formik.errors.date}
              aria-describedby={formik.touched.date && formik.errors.date ? "date-error" : undefined}
              min={getTodayDate()} // Prevent selecting dates in the past
            />
            <FormErrorMessage id="date-error">{formik.errors.date}</FormErrorMessage>
          </FormControl>

          {/* Time Field */}
          <FormControl isInvalid={formik.touched.time && formik.errors.time}>
            <FormLabel htmlFor="res-time">Choose time</FormLabel>
            <Select
              id="res-time"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={!availableTimes.length}
              placeholder="Select a time"
              aria-required="true"
              aria-invalid={formik.touched.time && !!formik.errors.time}
              aria-describedby={formik.touched.time && formik.errors.time ? "time-error" : undefined}
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
            <FormErrorMessage id="time-error">{formik.errors.time}</FormErrorMessage>
          </FormControl>

          {/* Guests Field */}
          <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <NumberInput
              min={2}
              max={10}
              value={formik.values.guests}
              onChange={(valueString) => {
                const value = parseInt(valueString, 10);
                if (!isNaN(value)) {
                  formik.setFieldValue('guests', value);
                }
              }}
            >
              <NumberInputField
                id="guests"
                name="guests"
                onBlur={formik.handleBlur}
                aria-required="true"
                aria-invalid={formik.touched.guests && !!formik.errors.guests}
                aria-describedby={formik.touched.guests && formik.errors.guests ? "guests-error" : undefined}
              />
            </NumberInput>
            <FormErrorMessage id="guests-error">{formik.errors.guests}</FormErrorMessage>
          </FormControl>

          {/* Occasion Field */}
          <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              id="occasion"
              name="occasion"
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-required="true"
              aria-invalid={formik.touched.occasion && !!formik.errors.occasion}
              aria-describedby={formik.touched.occasion && formik.errors.occasion ? "occasion-error" : undefined}
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Graduation">Graduation</option>
            </Select>
            <FormErrorMessage id="occasion-error">{formik.errors.occasion}</FormErrorMessage>
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            colorScheme="yellow"
            width="full"
            isDisabled={!formik.isValid || !isApiLoaded}
            aria-label="Make reservation"
          >
            Make Your Reservation
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default BookingForm;