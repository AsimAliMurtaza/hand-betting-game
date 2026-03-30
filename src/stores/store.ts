import { create } from "zustand";
import { GameState } from "@/types/types";
import { createTiles } from "@/utils/createTiles";
import { shuffle } from "@/utils/shuffle";
import { INITIAL_TILE_VALUES, HAND_SIZE } from "@/constants/constants";
import { calculateHandValue } from "@/utils/calculateHandValue";
import { updateTileValues } from "@/utils/updateTileValues";

export const useGameStore = create<GameState>((set, get) => ({
  drawPile: [],
  discardPile: [],
  currentHand: [],
  previousHand: [],
  score: 0,
  tileValues: { ...INITIAL_TILE_VALUES },
  currentValue: 0,
  previousValue: 0,

  // Initialize the game state with a shuffled set of tiles
  startGame: () => {
    const tiles = shuffle(createTiles());
    // draw the first hand and calculate its value
    const firstHand = tiles.slice(0, HAND_SIZE);
    const remaining = tiles.slice(HAND_SIZE);
    const firstValue = calculateHandValue(firstHand, INITIAL_TILE_VALUES);

    set({
      drawPile: remaining,
      discardPile: [],
      currentHand: [],
      previousHand: [],
      score: 0,
      tileValues: { ...INITIAL_TILE_VALUES },
      currentValue: firstValue,
      previousValue: 0,
    });
  },

  placeBet: (bet) => {
    const { drawPile, currentHand, currentValue, tileValues, score } = get();

    // draw next hand
    const newHand = drawPile.slice(0, HAND_SIZE);
    const remaining = drawPile.slice(HAND_SIZE);

    const newValue = calculateHandValue(newHand, tileValues);

    // check result
    let isWin = false;

    if (bet === "higher") {
      isWin = newValue > currentValue;
    } else {
      isWin = newValue < currentValue;
    }

    const updatedTileValues = updateTileValues(newHand, tileValues, isWin);

    set({
      previousHand: currentHand,
      currentHand: newHand,

      previousValue: currentValue,
      currentValue: newValue,

      drawPile: remaining,
      discardPile: [...get().discardPile, ...currentHand],

      score: isWin ? score + 1 : score,
      tileValues: updatedTileValues,
    });

    if (!isWin) {
      console.log("Game Over");
    }
  },
  // draw a new hand of tiles, update the draw pile and discard pile accordingly
  drawHand: () => {
    const { drawPile, currentHand, discardPile } = get();

    const newHand = drawPile.slice(0, HAND_SIZE);
    const remaining = drawPile.slice(HAND_SIZE);

    set({
      previousHand: currentHand,
      currentHand: newHand,
      drawPile: remaining,
      discardPile: [...discardPile, ...currentHand],
    });
  },
}));
