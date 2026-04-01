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
    // Create a new shuffled deck of tiles
    const deck = shuffle(createTiles());
    // Draw the initial hand
    const firstHand = deck.slice(0, HAND_SIZE);
    // The remaining tiles after drawing the initial hand
    const remaining = deck.slice(HAND_SIZE);
    // Calculate the initial hand value using the calculateHandValue utility function
    const initialHandValue = calculateHandValue(firstHand, INITIAL_TILE_VALUES);

    console.log(
      "Starting game with hand:",
      firstHand,
      "Value:",
      initialHandValue,
    );
    // Set the initial state of the game, including the draw pile, discard pile, current hand, score, tile values, and game status.
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
    // Retrieve the current game state values needed for processing the bet
    let {
      drawPile,
      currentHand,
      currentValue,
      tileValues,
      reshuffles,
      score,
      discardPile,
    } = get();
    // Check if the draw pile needs to be reshuffled before drawing the next hand
    const reshuffleResult = reshuffleIfNeeded(
      drawPile,
      discardPile,
      reshuffles,
      MAX_RESHUFFLES,
    );
    // Handle game over conditions if the maximum reshuffles have been reached.
    if (reshuffleResult.gameOver) {
      set({ isGameOver: true, gameOverReason: "deck_exhausted" });
      return;
    }
    // Update the draw pile, discard pile, and reshuffle count based on the reshuffle result
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
    // update tile values for non-number tiles in the hand based on whether the bet was correct or not
    const updatedTileValues = updateTileValues(newHand, tileValues, isWin);
    // check if any tile values have reached the limits that would trigger a game over condition
    const hitTileLimit = checkTileLimits(updatedTileValues);
    // Update the game state with the new hand, values, score, and check for game over conditions based on tile limits and reshuffle status.
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
