import { HStack, Button } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";

export default function Controls() {
  const { placeBet, isGameOver } = useGameStore();

  return (
    <HStack spacing={6} justify="center" mt={4}>
      <Button
        colorScheme="green"
        onClick={() => placeBet("higher")}
        isDisabled={isGameOver}
      >
        Higher
      </Button>

      <Button
        colorScheme="red"
        onClick={() => placeBet("lower")}
        isDisabled={isGameOver}
      >
        Lower
      </Button>
    </HStack>
  );
}