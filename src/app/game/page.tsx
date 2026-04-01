"use client";

import { useEffect } from "react";
import { useGameStore } from "@/stores/store";
import { updateLeaderboard } from "@/utils/leaderboard";
import GameBoard from "@/components/GameBoard";
import GameOverModal from "@/components/GameOverModal";

export default function GamePage() {
  const { startGame, score, isGameOver } = useGameStore();
  //start a new game when the component mounts
  useEffect(() => {
    startGame();
  }, [startGame]);
  // Update leaderboard when game is over
  useEffect(() => {
    if (isGameOver) {
      updateLeaderboard(score);
    }
  }, [isGameOver, score]);

  return (
    <>
      <GameBoard />
      <GameOverModal />
    </>
  );
}
