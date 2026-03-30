import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={6} textAlign="center" mt={10} borderWidth="1px" borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold">
        Welcome to the Hand Betting Game!
      </Text>
    </Box>
  );
}
