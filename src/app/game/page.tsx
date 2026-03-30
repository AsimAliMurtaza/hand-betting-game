"use client";

import { useEffect } from "react";
import { Button, Box, Text, HStack } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";
import HandView from "@/components/HandView";

export default function GamePage() {
  const { startGame, placeBet, currentHand, currentValue, score } = useGameStore();

  useEffect(() => {
    startGame();
  }, [startGame]);


  return (
    <Box p={6} textAlign="center" mt={10} borderWidth="1px" borderRadius="md">

      <Text mt={2}>Score: {score}</Text>
      <Text mt={4}>Hand Value: {currentValue}</Text>

      <HandView hand={currentHand} />

      <HStack mt={6}>
        <Button colorScheme="green" onClick={() => placeBet("higher")}>
          Bet Higher
        </Button>

        <Button colorScheme="red" onClick={() => placeBet("lower")}>
          Bet Lower
        </Button>
      </HStack>
    </Box>
  );
}
