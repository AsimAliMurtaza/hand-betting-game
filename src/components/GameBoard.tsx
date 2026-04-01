import { Box, VStack, HStack, Text, Button } from "@chakra-ui/react";
import HandView from "./HandView";
import Controls from "./Controls";
import ScorePanel from "./ScorePanel";
import HistoryView from "./HistoryView";
import { useGameStore } from "@/stores/store";
import DeckStack from "@/components/DeckStack";
import DiscardStack from "@/components/DiscardStack";
import { useRouter } from "next/navigation";
import CharacterTilesView from "./CharacterTilesValue";

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
          // When clicked, reset the game by calling the startGame function from the game store
          onClick={() => startGame()}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
        >
          Reset Game
        </Button>
      <CharacterTilesView />

      </VStack>

      <Box flex="1">
        
        <VStack spacing={6} align="stretch">
          {/* Render the score panel at the top of the game board, which displays the current score, value, reshuffles, and pile counts */}
          <ScorePanel />

          <HStack spacing={6} justify="center" mt={4} mb={4}>
            <DeckStack count={drawPile.length} />
            <DiscardStack count={discardPile.length} />
          </HStack>
          <HStack justify="center">
            {/* Render the current hand using the HandView component, passing the currentHand from the game store as a prop */}
            <HandView hand={currentHand} />
          </HStack>

          <Controls />
        </VStack>
        
      </Box>

      <Box w="350px" maxH="calc(100vh - 48px)" overflowY="auto" pr={2}>
        {/* Render the history view, passing the history from the game store as a prop */}
        <HistoryView history={history} />
      </Box>
    </Box>
  );
}
