import { Box, Text, VStack } from "@chakra-ui/react";

export default function Leaderboard({
  scores,
}: {
  scores: number[];
}) {
  return (
    <Box mt={6}>
      <Text fontSize="lg">Leaderboard</Text>

      <VStack align="start" mt={2} spacing={1} borderWidth="1px" p={3} borderRadius="md">
        {scores.map((s, i) => (
          <Text key={i}>
            {i + 1}. {s} points
          </Text>
        ))}
      </VStack>
    </Box>
  );
}