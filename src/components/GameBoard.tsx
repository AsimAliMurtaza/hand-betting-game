import { Box, VStack, HStack } from "@chakra-ui/react";
import HandView from "./HandView";
import Controls from "./Controls";
import ScorePanel from "./ScorePanel";
import HistoryView from "./HistoryView";
import { useGameStore } from "@/stores/store";
export default function GameBoard() {
  const { currentHand, history } = useGameStore();

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
      <Box flex="1">
        <VStack spacing={6} align="stretch">
          <ScorePanel />

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
