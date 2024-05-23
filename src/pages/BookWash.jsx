import { Container, Box, Heading, Text } from "@chakra-ui/react";

const BookWash = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          Book a Wash
        </Heading>
        <Text fontSize="xl" mb={6}>
          Schedule your car wash appointment with us.
        </Text>
      </Box>
    </Container>
  );
};

export default BookWash;
