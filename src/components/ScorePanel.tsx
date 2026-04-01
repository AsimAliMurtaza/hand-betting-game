import { Box, Text, HStack, VStack } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";
import { MAX_RESHUFFLES } from "@/constants/constants";

export default function ScorePanel() {
  const { score, currentValue, reshuffles, drawPile, discardPile } =
    useGameStore();

  return (
    <Box
      px={8}
      py={5}
      borderRadius="xl"
      bg="whiteAlpha.100"
      backdropFilter="blur(12px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="0 8px 30px rgba(0,0,0,0.3)"
    >
      <HStack spacing={10} justify="center">
        <VStack spacing={0}>
          <Text fontSize="sm" color="gray.300">
            SCORE
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color="teal.300">
            {score}
          </Text>
        </VStack>

        <Box h="40px" w="1px" bg="whiteAlpha.300" />

        <VStack spacing={0}>
          <Text fontSize="sm" color="gray.300">
            VALUE
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {currentValue}
          </Text>
        </VStack>

        <Box h="40px" w="1px" bg="whiteAlpha.300" />

        <VStack spacing={0}>
          <Text fontSize="sm" color="gray.300">
            RESHUFFLES
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {reshuffles}/{MAX_RESHUFFLES}
          </Text>
        </VStack>

        <Box h="40px" w="1px" bg="whiteAlpha.300" />
        <VStack spacing={0}>
          <Text fontSize="sm" color="gray.300">
            Draw Pile
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {drawPile.length}
          </Text>
        </VStack>

        <Box h="40px" w="1px" bg="whiteAlpha.300" />
        <VStack spacing={0}>
          <Text fontSize="sm" color="gray.300">
            Discard Pile
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {discardPile.length}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
