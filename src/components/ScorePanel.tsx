import { Box, Text, HStack } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";
import { MAX_RESHUFFLES } from "@/constants/constants";

export default function ScorePanel() {
  const { score, currentValue, reshuffles } = useGameStore();

  return (
    <HStack
      spacing={6}
      justify="center"
      p={4}
      borderWidth="1px"
      borderRadius="md"
    >
      <Box textAlign="center" minWidth="100px">
        <Text fontSize="lg">Score</Text>
        <Text fontWeight="bold">{score}</Text>
      </Box>

      <Box textAlign="center" minWidth="100px">
        <Text fontSize="lg"> Current Value</Text>
        <Text fontWeight="bold">{currentValue}</Text>
      </Box>

      <Box textAlign="center" minWidth="100px">
        <Text fontSize="lg">Reshuffles</Text>
        <Text fontWeight="bold">{reshuffles}/{MAX_RESHUFFLES}</Text>
      </Box>
    </HStack>
  );
}
