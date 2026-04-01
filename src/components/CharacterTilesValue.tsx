import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";

export default function CharacterTilesView() {
  const { tileValues } = useGameStore();

  return (
    <Box
      w="220px"
      maxH="80vh"
      overflowY="auto"
      bg="whiteAlpha.100"
      borderRadius="xl"
      p={4}
      boxShadow="md"
    >
      <Text
        fontSize="lg"
        mb={4}
        color="teal.300"
        fontWeight="bold"
        textAlign="center"
      >
        Tile Values
      </Text>

      <VStack spacing={2} align="stretch">
        {Object.entries(tileValues).map(([key, value]) => (
          <HStack
            key={key}
            justify="space-between"
            p={2}
            borderRadius="md"
            bg="whiteAlpha.50"
            _hover={{ bg: "whiteAlpha.200" }}
            transition="0.2s"
          >
            <Text fontSize="sm" color="gray.300">
              {formatLabel(key)}
            </Text>

            <Text
              fontWeight="bold"
              color={
                value > 5
                  ? "green.300"
                  : value < 5
                  ? "red.300"
                  : "gray.300"
              }
            >
              {value}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

// helper
function formatLabel(label: string) {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}