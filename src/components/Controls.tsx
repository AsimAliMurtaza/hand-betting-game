import { HStack, Button } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";

export default function Controls() {
  const { placeBet, isGameOver } = useGameStore();
    // Render the betting controls with "Higher" and "Lower" buttons, which are disabled when the game is over
  return (
    <HStack spacing={6} justify="center" mt={4}>
      <Button
        colorScheme="green"
        // When clicked, place a bet on "higher" using the placeBet function from the game store 
        onClick={() => placeBet("higher")}
        isDisabled={isGameOver}
      >
        Higher
      </Button>

      <Button
        colorScheme="red"
        // When clicked, place a bet on "lower" using the placeBet function from the game store
        onClick={() => placeBet("lower")}
        isDisabled={isGameOver}
      >
        Lower
      </Button>
    </HStack>
  );
}