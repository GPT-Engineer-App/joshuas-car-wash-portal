import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} justify="center" mb={6}>
      <Button as={Link} to="/" colorScheme="teal" size="lg">
        Home
      </Button>
      <Button as={Link} to="/book-wash" colorScheme="teal" size="lg">
        Book a Wash
      </Button>
      <Button as={Link} to="/services" colorScheme="blue" size="lg">
        Our Services
      </Button>
      <Button as={Link} to="/contact" colorScheme="purple" size="lg">
        Contact Us
      </Button>
    </HStack>
  );
};

export default Navigation;
