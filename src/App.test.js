import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';
import { fetchData } from './api';

// Mock Chakra UI
jest.mock('@chakra-ui/react', () => ({
  ChakraProvider: ({ children }) => children,
  // Add any other Chakra components used directly in tests
  // For example:
  Box: ({ children, ...props }) => <div {...props}>{children}</div>,
  Heading: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
  // Add more as needed
}));

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
  test('renders Main component on home route', () => {
    renderWithRouter(<App />);

    // Test navigation (from screenshot)
    const nav = screen.getByRole('navigation');
    expect(within(nav).getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(within(nav).getByRole('link', { name: /reservations/i })).toBeInTheDocument();

    // Test main content
    const mainElement = screen.getByRole('main');
    expect(within(mainElement).getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
    expect(within(mainElement).getByRole('button', { name: /reserve a table/i })).toBeInTheDocument();
  });
  
  // Cleanup mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('navigates to Reservations page when clicking Reservations link', async () => {
    renderWithRouter(<App />);
    const nav = screen.getByRole('navigation');
    const reservationsLink = within(nav).getByRole('link', { name: /reservations/i });
    fireEvent.click(reservationsLink);

    // Wait for navigation and check for booking form
    await screen.findByRole('heading', { name: /reserve a table/i });
    expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test('Reserve a Table button navigates to Reservations page', async () => {
    renderWithRouter(<App />);
    const mainElement = screen.getByRole('main');
    const reserveButton = within(mainElement).getByRole('button', { name: /reserve a table/i });
    fireEvent.click(reserveButton);

    // Wait for navigation and check for booking form
    await screen.findByRole('heading', { name: /reserve a table/i });
    expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
  });

  test('renders Main with BookingForm on /reservations route', () => {
    renderWithRouter(<App />, { route: '/reservations' });

    // Check for booking form
    const mainElement = screen.getByRole('main');
    expect(within(mainElement).getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
    expect(within(mainElement).getByLabelText(/choose date/i)).toBeInTheDocument();
  });
});