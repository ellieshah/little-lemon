import React from 'react';
import { Box, Container, Flex, Image, Link as ChakraLink, Text, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="#495E57" py={8}>
      <Container maxW="container.lg">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={6}
          mb={6}
        >
          {/* Logo Section */}
          <Box>
            <Image src="/FooterLogo.png" alt="Little Lemon Logo" boxSize="100px" objectFit="contain" />
          </Box>

          {/* Doormat Navigation */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg" color="#EDEFEE">Navigation</Text>
            <ChakraLink as={Link} to="/" color="#EDEFEE">Home</ChakraLink>
            <ChakraLink as={Link} to="/about" color="#EDEFEE">About</ChakraLink>
            <ChakraLink as={Link} to="/menu" color="#EDEFEE">Menu</ChakraLink>
            <ChakraLink as={Link} to="/reservations" color="#EDEFEE">Reservations</ChakraLink>
            <ChakraLink as={Link} to="/login" color="#EDEFEE">Login</ChakraLink>
          </VStack>

          {/* Contact Information */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg" color="#EDEFEE">Contact</Text>
            <HStack>
              <FaEnvelope color="#EDEFEE" />
              <ChakraLink href="mailto:info@littlelemon.com" color="#EDEFEE">info@littlelemon.com</ChakraLink>
            </HStack>
            <HStack>
              <FaPhone color="#EDEFEE" />
              <ChakraLink href="tel:+15551234567" color="#EDEFEE">+1 (555) 123-4567</ChakraLink>
            </HStack>
          </VStack>

          {/* Social Media */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontWeight="bold" fontSize="lg" color="#EDEFEE">Follow Us</Text>
            <HStack spacing={4}>
              <ChakraLink href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
                <FaFacebook size="24px" color="#EDEFEE" />
              </ChakraLink>
              <ChakraLink href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
                <FaInstagram size="24px" color="#EDEFEE" />
              </ChakraLink>
            </HStack>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Box textAlign="center" borderTopWidth="1px" borderTopColor="gray.300" color="#EDEFEE"  pt={4}>
          <Text fontSize="sm">© {new Date().getFullYear()} Little Lemon. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;