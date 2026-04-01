import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import TileCard from "./TileCard";
import { Tile } from "@/types/types";

type HistoryItem = {
  hand: Tile[];
  value: number;
};

export default function HistoryView({
  history,
}: {
  history: HistoryItem[];
}) {
  return (
    <VStack align="start" mt={6}>
      <Text fontSize="lg">History</Text>

      {history.map((item, index) => (
        <Box key={index} borderWidth="1px" p={3} w="100%">
          <Text>Value: {item.value}</Text>

          <HStack mt={2}>
            {item.hand.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
            ))}
          </HStack>
        </Box>
      ))}
    </VStack>
  );
}