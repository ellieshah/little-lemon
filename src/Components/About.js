import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Flex,
    Image,
    VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate ();

return (
    <Box as="main" py={20}>
        <Container maxW="container.lg">
            <Box as="section" mb={24}>
                <Flex direction={{base: 'column', md:'row'}} align="center" gap={8}>
                    <VStack Flex="1" align={{base: 'center', md:'flex-start'}} textAlign={{base:'center', md:'left'}} spacing={4}>
                        <Heading as="h1" size="2xl" fontFamily="Markazi-text, serif" color="#495E57">
                            Little Lemon
                        </Heading>
                        <Heading as="h2" size="lg" color="gray.600" fontFamily="Markazi-text, serif" marginTop="-2" marginBottom="8">
                            Chicago
                        </Heading>
                        <Text fontSize="md" maxW="md" fontFamily="karla, sans-serif">
                        Little Lemon is a charming family-owned Mediterranean restaurant located in the heart of Chicago. We focus on traditional recipes with a modern twist, using only the freshest ingredients to ensure an authentic and unforgettable dining experience.
                        </Text>
                        <Text fontSize="md" maxW="md" fontFamily="karla, sans-serif">
                        Founded by two Italian brothers, Mario and Adrian, Little Lemon brings the flavors of the Mediterranean coast to your table, with each dish carefully crafted to transport you to the sunny shores of the Mediterranean Sea.
                        </Text>
                    </VStack>
                    <Box flex="1" display={{base: 'none', md:'block'}}>
                    <Box position="relative" width="fit-content">
                      <Image
                       src="/Mario&Adrian.png"
                       alt="Mario and Adrian"
                       borderRadius="md"
                       objectFit="cover"
                       boxSize="300px"
                       position="relative"
                       bottom="-30px"
                       left="27px"
                       />
                       <Image
                       src="/Mario&Adrian2.png"
                       alt="Mario and Adrian 2"
                       borderRadius="md"
                       objectFit="cover"
                       boxSize="300px"
                       position="absolute"
                       top="-45px"
                       right="-220"
                       border="2px solid white"
                       boxShadow="md"
                       opacity={0.9}
                       />
                       </Box>
                    </Box>
                </Flex>
            </Box>
        </Container>
    </Box>
);
};




export default About;