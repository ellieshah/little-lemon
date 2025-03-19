import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';

// Helper function to render components with router
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
};

describe('App Component', () => {
  test('renders Header, Main, and Footer on home route', () => {
    renderWithRouter(<App />);
    
    // Test header elements
    const header = screen.getByRole('banner');
    const headerLogo = within(header).getByAltText('Little Lemon Logo');
    const nav = within(header).getByRole('navigation');
    const reservationsLink = within(nav).getByRole('link', { name: /reservations/i });
    
    expect(headerLogo).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    
    // Test main content
    const mainElement = screen.getByRole('main');
    expect(within(mainElement).getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
    expect(within(mainElement).getByRole('button', { name: /reserve a table/i })).toBeInTheDocument();
    
    // Test footer
    const footer = screen.getByRole('contentinfo');
    expect(within(footer).getByText(/info@littlelemon.com/i)).toBeInTheDocument();
  });

  test('navigates to About page when clicking About link', async () => {
    renderWithRouter(<App />);
    const nav = screen.getByRole('navigation');
    const aboutLink = within(nav).getByRole('link', { name: /about/i });
    fireEvent.click(aboutLink);
    
    const aboutSection = screen.getByRole('region', { name: /about/i });
    expect(within(aboutSection).getByText(/Little Lemon is a charming family-owned Mediterranean restaurant/i)).toBeInTheDocument();
  });

  test('navigates to BookingPage when clicking Reservations link', async () => {
    renderWithRouter(<App />);
    const nav = screen.getByRole('navigation');
    const reservationsLink = within(nav).getByRole('link', { name: /reservations/i });
    fireEvent.click(reservationsLink);
    
    const bookingPage = screen.getByRole('region', { name: /booking/i });
    expect(within(bookingPage).getByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
    expect(within(bookingPage).getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test('Reserve a Table button navigates to BookingPage', async () => {
    renderWithRouter(<App />);
    const mainElement = screen.getByRole('main');
    const reserveButton = within(mainElement).getByRole('button', { name: /reserve a table/i });
    fireEvent.click(reserveButton);
    
    const bookingPage = screen.getByRole('region', { name: /booking/i });
    expect(within(bookingPage).getByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
    expect(within(bookingPage).getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test('renders correct component for different routes', () => {
    // Test About route
    renderWithRouter(<App />, { route: '/about' });
    const aboutSection = screen.getByRole('region', { name: /about/i });
    expect(within(aboutSection).getByText(/Little Lemon is a charming family-owned Mediterranean restaurant/i)).toBeInTheDocument();

    // Test Reservations route
    renderWithRouter(<App />, { route: '/reservations' });
    const bookingPage = screen.getByRole('region', { name: /booking/i });
    expect(within(bookingPage).getByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
  });
});