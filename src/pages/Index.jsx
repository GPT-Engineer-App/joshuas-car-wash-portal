import { Container, Box, VStack, HStack, Text, Button, Image, IconButton, Heading, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} px={6}>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} size="lg" mb={4} />
        <Heading as="h1" size="2xl" mb={4}>
          Joshua's Car Wash
        </Heading>
        <Text fontSize="xl" mb={6}>
          Premium Car Wash Services
        </Text>
        <Image src="https://images.unsplash.com/photo-1565689876697-e467b6c54da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNofGVufDB8fHx8MTcxNjQ5MDI1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Car Wash" borderRadius="md" mb={6} />
        <VStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Book a Wash
          </Button>
          <Button colorScheme="blue" size="lg">
            Our Services
          </Button>
          <Button colorScheme="purple" size="lg">
            Contact Us
          </Button>
        </VStack>
      </Box>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="lg" mb={4}>
          Why Choose Us?
        </Heading>
        <Text fontSize="md" mb={6}>
          At Joshua's Car Wash, we provide top-notch car wash services using the latest technology and eco-friendly products. Our team of professionals ensures that your car gets the best treatment possible.
        </Text>
        <HStack spacing={4} justify="center">
          <Box>
            <Image src="https://images.unsplash.com/photo-1528108613580-2e4f3cf2533f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwdGVhbXxlbnwwfHx8fDE3MTY0OTAyNTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Team" borderRadius="md" />
            <Text mt={2}>Experienced Team</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMjBjYXIlMjB3YXNofGVufDB8fHx8MTcxNjQ5MDI1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Eco-Friendly" borderRadius="md" />
            <Text mt={2}>Eco-Friendly Products</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1603724223241-527d8009e029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTY0OTAyNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Latest Technology" borderRadius="md" />
            <Text mt={2}>Latest Technology</Text>
          </Box>
        </HStack>
      </Box>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="lg" mb={4}>
          Follow Us
        </Heading>
        <HStack spacing={4} justify="center">
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </Box>
      <Box textAlign="center" py={10} px={6}>
        <Text fontSize="sm">© 2023 Joshua's Car Wash. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
