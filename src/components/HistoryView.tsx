import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import TileCard from "./TileCard";
import { Tile } from "@/types/types";
import { useGameStore } from "@/stores/store";

type HistoryItem = {
  hand: Tile[];
  value: number;
};

export default function HistoryView({ history }: { history: HistoryItem[] }) {
  const { tileValues } = useGameStore();
  return (
    <Box mt={8} w="100%">
      <Text fontSize="lg" mb={3} color="gray.300" fontWeight="bold" textAlign="center">
        History
      </Text>

      <VStack spacing={3} align="stretch">
        {history.map((item, index) => (
          <Box
            key={index}
            p={3}
            borderRadius="lg"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(8px)"
            transition="all 0.2s ease"
            overflowX="auto"
            _hover={{
              bg: "whiteAlpha.200",
              transform: "translateY(-2px)",
            }}
          >
            <HStack justify="space-between" mb={2}>
              <Text fontSize="sm" color="gray.400">
                #{history.length - index}
              </Text>

              <Text fontWeight="semibold">{item.value}</Text>
            </HStack>

            <HStack spacing={2} flexWrap="wrap">
              {item.hand.map((tile) => (
                <TileCard key={tile.id} tile={tile} tileValues={tileValues} />
              ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
