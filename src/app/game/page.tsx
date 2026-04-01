"use client";

import { useEffect } from "react";
import { useGameStore } from "@/stores/store";
import { updateLeaderboard } from "@/utils/leaderboard";
import GameBoard from "@/components/GameBoard";
import GameOverModal from "@/components/GameOverModal";


export default function GamePage() {
  const {
    startGame,
    score,
    isGameOver,
  } = useGameStore();

  useEffect(() => {
    startGame();
  }, [startGame]);

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
