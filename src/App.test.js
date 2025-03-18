import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router'; 
import App from './App';
import '@testing-library/jest-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('App Component', () => {
  test('renders Header, Main, and Footer on home route', () => {
    renderWithRouter(<App />);
    expect(screen.getByAltText('Little Lemon Logo')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
    expect(screen.getByText('contact@littlelemon.com')).toBeInTheDocument();
  });

  test('navigates to About page when clicking About link', async () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText('Little Lemon is a charming family-owned Mediterranean restaurant')).toBeInTheDocument();
  });

  test('navigates to BookingPage when clicking Reservations link', async () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByText('Reservations'));
    expect(screen.getByText('Reserve Your Table')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  });

  test('Reserve a Table button navigates to BookingPage', async () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByText('Reserve a Table'));
    expect(screen.getByText('Reserve Your Table')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  });

  test('renders correct component for different routes', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Little Lemon is a charming family-owned Mediterranean restaurant')).toBeInTheDocument();

    render(
      <MemoryRouter initialEntries={['/reservations']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Reserve Your Table')).toBeInTheDocument();
  });
});