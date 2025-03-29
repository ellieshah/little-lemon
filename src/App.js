import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BookingPage from './Components/BookingPage';
import About from './Components/About';
import Specials from './Components/Specials';

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/specials" element={<Specials />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
