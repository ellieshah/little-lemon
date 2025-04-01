import React from 'react';
import { Box, Container, Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
  return (
    <Box as="header" bg="white" boxShadow="sm" py={4}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Image src={logo} alt="Little Lemon Logo" height="40px" />
          <Flex as="nav" gap={6}>
            <ChakraLink as={Link} to="/" fontWeight="medium">
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/about" fontWeight="medium">
              About
            </ChakraLink>
            <ChakraLink as={Link} to="/menu" fontWeight="medium">
              Menu
            </ChakraLink>
            <ChakraLink as={Link} to="/reservations" fontWeight="medium" data-testid="reservations-link">
              Reservations
            </ChakraLink>
            <ChakraLink as={Link} to="/order-online" fontWeight="medium">
              Order Online
            </ChakraLink>
            <ChakraLink as={Link} to="/login" fontWeight="medium">
              Login
            </ChakraLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;