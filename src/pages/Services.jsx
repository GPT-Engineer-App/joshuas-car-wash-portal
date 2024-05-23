import { Container, Box, Heading, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          Our Services
        </Heading>
        <Text fontSize="xl" mb={6}>
          Discover the range of services we offer.
        </Text>
      </Box>
    </Container>
  );
};

export default Services;
