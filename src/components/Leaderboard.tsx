import { Box, Text, VStack, HStack } from "@chakra-ui/react";

export default function Leaderboard({ scores }: { scores: number[] }) {
    //receive the scores as props and renders the leaderboard
  return (
    <Box mt={6}>
      <Text
        fontSize="2xl"
        justifyContent="center"
        textAlign="center"
        fontWeight="bold"
        mb={3}
        color="teal.300"
      >
        Leaderboard
      </Text>

      <VStack
        align="stretch"
        spacing={2}
        p={4}
        borderRadius="xl"
        bg="whiteAlpha.100"
        border="1px solid"
        borderColor="whiteAlpha.200"
        boxShadow="md"
        minW="50vw"
      >
        {scores.length === 0 && (
          <Text color="gray.400" textAlign="center">
            No scores yet
          </Text>
        )}

        {scores.map((score, index) => (
          <HStack
            key={index}
            justify="space-between"
            p={2}
            borderRadius="md"
            bg={index === 0 ? "green.400" : "whiteAlpha.50"}
            _hover={{ bg: "whiteAlpha.200", transform: "scale(1.02)" }}
            transition="all 0.2s ease"
          >
            <Text fontWeight={index === 0 ? "bold" : "medium"}>
              #{index + 1}
            </Text>
            <Text fontWeight={index === 0 ? "bold" : "medium"}>
              {score} pts
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
