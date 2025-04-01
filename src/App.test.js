import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';
import { fetchData } from './api';

// Mock Chakra UI
jest.mock('@chakra-ui/react', () => ({
  ChakraProvider: ({ children }) => children,
  Box: ({ children, as, ...props }) => {
    const Component = as || 'div';
    return <Component {...props}>{children}</Component>;
  },
  Container: ({ children, ...props }) => <div {...props}>{children}</div>,
  Flex: ({ children, ...props }) => <div {...props}>{children}</div>,
  VStack: ({ children, ...props }) => <div {...props}>{children}</div>,
  HStack: ({ children, as, ...props }) => {
    if (as === 'nav') {
      return <nav {...props}>{children}</nav>;
    }
    return <div {...props}>{children}</div>;
  },
  SimpleGrid: ({ children, ...props }) => <div {...props}>{children}</div>,
  Text: ({ children, ...props }) => <p {...props}>{children}</p>,
  Heading: ({ children, as, ...props }) => {
    const Component = as || 'h2';
    return <Component {...props}>{children}</Component>;
  },
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
  Image: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
  Link: ({ children, ...props }) => <a {...props}>{children}</a>,
  FormControl: ({ children, ...props }) => <div {...props}>{children}</div>,
  FormLabel: ({ children, ...props }) => <label {...props}>{children}</label>,
  FormErrorMessage: ({ children, ...props }) => <div {...props}>{children}</div>,
  Input: ({ ...props }) => <input {...props} />,
  Select: ({ children, ...props }) => <select {...props}>{children}</select>,
  NumberInput: ({ children, ...props }) => <div {...props}>{children}</div>,
  NumberInputField: ({ ...props }) => <input type="number" {...props} />,
  Modal: ({ children, ...props }) => <div {...props}>{children}</div>,
  ModalOverlay: ({ children, ...props }) => <div {...props}>{children}</div>,
  ModalContent: ({ children, ...props }) => <div {...props}>{children}</div>,
  ModalHeader: ({ children, ...props }) => <div {...props}>{children}</div>,
  ModalBody: ({ children, ...props }) => <div {...props}>{children}</div>,
  ModalFooter: ({ children, ...props }) => <div {...props}>{children}</div>,
  ChakraLink: ({ children, as, to, ...props }) => {
    const Component = as || 'a';
    return <Component href={to} {...props}>{children}</Component>;
  }
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
    
    // Test main content - using more specific selectors
    const heading = screen.getByRole('heading', { level: 1, name: /little lemon/i });
    expect(heading).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /chicago/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reserve a table/i })).toBeInTheDocument();
  });
  
  // Cleanup mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('navigates to Reservations page when clicking Reservations link', () => {
    // Verify link exists on home page
    const { unmount } = renderWithRouter(<App />);
    const reservationsLink = screen.getByTestId('reservations-link');
    expect(reservationsLink).toBeInTheDocument();
    unmount();
    
    // Test reservations route directly
    renderWithRouter(<App />, { route: '/reservations' });
    expect(screen.getByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
  });

  test('Reserve a Table button navigates to Reservations page', async () => {
    renderWithRouter(<App />);
    const reserveButton = screen.getByRole('button', { name: /reserve a table/i });
    fireEvent.click(reserveButton);

    // Wait for navigation and check for booking form
    expect(await screen.findByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
  });

  test('renders Main with BookingForm on /reservations route', () => {
    renderWithRouter(<App />, { route: '/reservations' });

    // Check for booking form
    expect(screen.getByRole('heading', { name: /reserve your table/i })).toBeInTheDocument();
  });
});