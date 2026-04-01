import { create } from "zustand";
import { GameState } from "@/types/types";
import { createTiles } from "@/utils/createTiles";
import { shuffle } from "@/utils/shuffle";
import {
  INITIAL_TILE_VALUES,
  HAND_SIZE,
  MAX_RESHUFFLES,
} from "@/constants/constants";
import { calculateHandValue } from "@/utils/calculateHandValue";
import { updateTileValues } from "@/utils/updateTileValues";
import { checkTileLimits } from "@/utils/checkGameOver";
import { reshuffleIfNeeded } from "@/utils/reshuffle";

export const useGameStore = create<GameState>((set, get) => ({
  drawPile: [],
  discardPile: [],
  currentHand: [],
  previousHand: [],
  score: 0,
  tileValues: { ...INITIAL_TILE_VALUES },
  currentValue: 0,
  previousValue: 0,
  isGameOver: false,
  gameOverReason: null,
  reshuffles: 0,
  history: [],

  // Initialize the game state with a shuffled set of tiles
  startGame: () => {
    const deck = shuffle(createTiles());
    const firstHand = deck.slice(0, HAND_SIZE);
    const remaining = deck.slice(HAND_SIZE);

    const initialHandValue = calculateHandValue(firstHand, INITIAL_TILE_VALUES);

    console.log("Starting game with hand:", firstHand, "Value:", initialHandValue);

    set({
      drawPile: remaining,
      discardPile: [],
      currentHand: firstHand,
      previousHand: [],
      score: 0,
      tileValues: { ...INITIAL_TILE_VALUES },
      currentValue: initialHandValue,
      previousValue: 0,
      isGameOver: false,
      gameOverReason: null,
      reshuffles: 0,
      history: [],
    });
  },

  placeBet: (bet) => {
    let {
      drawPile,
      currentHand,
      currentValue,
      tileValues,
      reshuffles,
      score,
      discardPile,
    } = get();

    const reshuffleResult = reshuffleIfNeeded(
      drawPile,
      discardPile,
      reshuffles,
      MAX_RESHUFFLES,
    );

    if (reshuffleResult.gameOver) {
      set({ isGameOver: true, gameOverReason: "deck_exhausted" });
      return;
    }

    drawPile = reshuffleResult.drawPile;
    discardPile = reshuffleResult.discardPile;
    reshuffles = reshuffleResult.reshuffles;

    // draw next hand
    const newHand = drawPile.slice(0, HAND_SIZE);
    const remaining = drawPile.slice(HAND_SIZE);

    const newValue = calculateHandValue(newHand, tileValues);

    let isWin = false;

    if (bet === "higher") {
      isWin = newValue > currentValue;
    } else {
      isWin = newValue < currentValue;
    }

    const updatedTileValues = updateTileValues(newHand, tileValues, isWin);
    console.log("Placed bet:", bet, "New hand:", newHand, "New value:", newValue, "Win:", isWin);
    console.log("Updated tile values:", updatedTileValues);
    const hitTileLimit = checkTileLimits(updatedTileValues);

    set({
      previousHand: currentHand,
      currentHand: newHand,
      previousValue: currentValue,
      currentValue: newValue,
      drawPile: remaining,
      discardPile: [...discardPile, ...currentHand],
      reshuffles,
      history: [
        {
          hand: currentHand,
          value: currentValue,
        },
        ...get().history,
      ].slice(0, 10),
      score: isWin ? score + 1 : score,
      tileValues: updatedTileValues,
      isGameOver: hitTileLimit,
      gameOverReason: hitTileLimit ? "tile_limit" : null,
    });
  },
}));
