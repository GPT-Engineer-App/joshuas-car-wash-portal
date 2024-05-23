import { Container, Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="xl" mb={6}>
          Get in touch with us for any queries or appointments.
        </Text>
      </Box>
    </Container>
  );
};

export default Contact;
