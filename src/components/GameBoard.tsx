import { Box, VStack, HStack, Text, Button } from "@chakra-ui/react";
import HandView from "./HandView";
import Controls from "./Controls";
import ScorePanel from "./ScorePanel";
import HistoryView from "./HistoryView";
import { useGameStore } from "@/stores/store";
import DeckStack from "@/components/DeckStack";
import DiscardStack from "@/components/DiscardStack";
import { useRouter } from "next/navigation";

export default function GameBoard() {
  const { currentHand, history, drawPile, discardPile, startGame } =
    useGameStore();
  const router = useRouter();

  return (
    <Box
      w="100vw"
      minH="100vh"
      px={6}
      py={6}
      display="flex"
      gap={6}
      alignItems="flex-start"
    >
      <VStack spacing={6} align="stretch">
        <Button
          onClick={() => router.push("/")}
          borderRadius="full"
          variant="solid"
          colorScheme="teal"
        >
          Back to Home
        </Button>
        <Button
          onClick={() => startGame()}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
        >
          Reset Game
        </Button>
      </VStack>

      <Box flex="1">
        <VStack spacing={6} align="stretch">
          <ScorePanel />

          <HStack spacing={6} justify="center" mt={4} mb={4}>
            <DeckStack count={drawPile.length} />
            <DiscardStack count={discardPile.length} />
          </HStack>
          <HStack justify="center">
            <HandView hand={currentHand} />
          </HStack>

          <Controls />
        </VStack>
      </Box>

      <Box w="350px" maxH="calc(100vh - 48px)" overflowY="auto" pr={2}>
        <HistoryView history={history} />
      </Box>
    </Box>
  );
}
