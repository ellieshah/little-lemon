import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import BookingForm from './BookingForm';

const Main = ({ showBookingForm = false }) => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  useEffect(() => {
    const checkApiLoaded = () => {
      if (window.submitAPI) {
        setIsApiLoaded(true);
      } else {
        setTimeout(checkApiLoaded, 100);
      }
    };
    checkApiLoaded();
  }, []);

  const handleReserve = () => {
    navigate('/reservations');
  };

  const submitForm = async (formData) => {
    if (!isApiLoaded) {
      alert('API not loaded yet');
      return;
    }
    try {
      const result = await window.submitAPI(formData);
      console.log('Submit API result:', result);
      if (result === true) {
        setIsConfirmed(true);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const closePopup = () => {
    setIsConfirmed(false);
    setTimeout(() => navigate('/'), 300);
  };

  return (
    <Box as="main" py={8}>
      <Container maxW="container.lg">
        {showBookingForm ? (
          <Box as="section" mb={8}>
            <Heading as="h1" size="xl" mb={6} textAlign="center">
              Reserve a Table
            </Heading>
            <BookingForm submitForm={submitForm} />
            <Modal isOpen={isConfirmed} onClose={closePopup} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Booking Confirmed!</ModalHeader>
                <ModalBody>
                  <Text>Your reservation has been successfully made. We look forward to seeing you!</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" onClick={closePopup}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        ) : (
          <>
            {/* Hero Section */}
            <Box as="section" mb={12}>
              <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={20}>
                <VStack flex="1" align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} spacing={4}>
                  <Heading as="h1" size="2xl" fontFamily="Markazi-text, serif" color="#495E57">
                    Little Lemon
                  </Heading>
                  <Heading as="h2" size="lg" color="gray.600" fontFamily="Markazi-text, serif" marginTop="-2" marginBottom="8"> 
                    Chicago
                  </Heading>
                  <Text fontSize="lg" maxW="75%" paddingBottom="10">
                    We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                  </Text>
                  <Button colorScheme="yellow" size="lg" onClick={handleReserve}>
                    Reserve a Table
                  </Button>
                </VStack>
                <Box flex="1" display={{ base: 'none', md: 'block' }}>
                  <Image src="/restauranfood.png" alt="Restaurant Food" borderRadius="md" objectFit="cover" />
                </Box>
              </Flex>
            </Box>

            {/* Specials Section */}
            <Box as="section" mb={12} paddingTop="14">
              <Flex justify="space-between" align="center" mb={6}>
                <Heading as="h2" size="2xl" fontFamily="Markazi-text, serif">
                  This week's specials!
                </Heading>
                <Button backgroundColor="#F4CE14">
                  Online Menu
                </Button>
              </Flex>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                  <Image src="/greeksalad.png" alt="Greek Salad" borderRadius="md" mb={4} />
                  <Heading as="h3" mb={2} size="md">
                    Greek Salad
                  </Heading>
                  <Text mb={4} fontFamily="karla, sans-serif" fontWeight={400} size="md">
                    The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.
                  </Text>
                  <Text color="#495E57" fontFamily="karla, sans-serif" fontWeight="medium" size="md" fontStyle="italic">
                    Order a delivery!
                  </Text>
                </Box>
                <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                  <Image src="/bruschetta.png" alt="Bruchetta" borderRadius="md" mb={4} />
                  <Heading as="h3" size="md" mb={2}>
                    Bruchetta
                  </Heading>
                  <Text mb={4} fontFamily="karla, sans-serif">
                  Our Bruschetta is made from grilled bread that has been smeared with garlic, topped with rip, vin tomatoes, and finished with a touch of salt and olive oil for a burst of authentic flavor.                  </Text>
                  <Text color="#495E57" fontFamily="karla, sans-serif" fontWeight="medium" size="md" fontStyle="italic">
                    Order a delivery!
                  </Text>
                </Box>
                <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                  <Image src="/lemmondessert.png" alt="Lemon Dessert" borderRadius="md" mb={4} />
                  <Heading as="h3" size="md" mb={2}>
                    Lemon Dessert
                  </Heading>
                  <Text mb={4} fontFamily="karla, sans-serif">
                  This comes straight from Grandma's recipe book—every last ingredient, including a touch of fresh lemon, has been sourced and is as authentic as can be imagined.                  </Text>
                  <Text color="#495E57" fontFamily="karla, sans-serif" fontWeight="medium" size="md" fontStyle="italic">
                  Order a delivery!
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Testimonials Section */}
            <Box as="section">
              <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8} paddingTop="8" paddingBottom="8">
                <VStack flex="1" align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} spacing={4}>
                  <Heading as="h1" size="lg" fontFamily="Markazi-text, serif" color="#495E57">
                    What Our Customers Say
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
                    {/* Testimonial 1 */}
                    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                      <Text fontSize="lg" fontStyle="italic" mb={2}>
                        "Little Lemon is a hidden gem! The food is bursting with flavor, and the atmosphere is so cozy. I can’t wait to come back!"
                      </Text>
                      <Text fontWeight="bold" color="green.600">
                        — Sarah M.
                      </Text>
                    </Box>
                    {/* Testimonial 2 */}
                    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                      <Text fontSize="lg" fontStyle="italic" mb={2}>
                        "The best Mediterranean food I’ve had in Chicago. The staff is so friendly, and the lemon dessert is to die for!"
                      </Text>
                      <Text fontWeight="bold" color="green.600">
                        — James T.
                      </Text>
                    </Box>
                    {/* Testimonial 3 */}
                    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                      <Text fontSize="lg" fontStyle="italic" mb={2}>
                        "A perfect spot for a family dinner. The Greek salad was fresh and delicious, and the service was top-notch."
                      </Text>
                      <Text fontWeight="bold" color="green.600">
                        — Emily R.
                      </Text>
                    </Box>
                    {/* Testimonial 4 */}
                    <Box bg="gray.50" p={4} borderRadius="md" boxShadow="sm">
                      <Text fontSize="lg" fontStyle="italic" mb={2}>
                        "I love the modern twist on traditional recipes. Little Lemon never disappoints!"
                      </Text>
                      <Text fontWeight="bold" color="green.600">
                        — Michael P.
                      </Text>
                    </Box>
                  </SimpleGrid>
                </VStack>
              </Flex>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Main;