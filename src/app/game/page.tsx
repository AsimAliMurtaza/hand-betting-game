"use client";

import { useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { useGameStore } from "@/stores/store";
import HandView from "@/components/HandView";
import { calculateHandValue } from "@/utils/calculateHandValue";

export default function GamePage() {
  const { startGame, drawHand, currentHand, tileValues } = useGameStore();
  // start game on component mount
  useEffect(() => {
    startGame();
  }, [startGame]);

  const value = calculateHandValue(currentHand, tileValues);

  return (
    <Box p={6} textAlign="center" mt={10} borderWidth="1px" borderRadius="md">
      <Button onClick={drawHand} colorScheme="teal">
        Draw Hand
      </Button>

      <Text mt={4}>Hand Value: {value}</Text>

      <HandView hand={currentHand} />
    </Box>
  );
}
