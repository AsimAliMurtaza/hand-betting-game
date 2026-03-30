import { create } from "zustand";
import { GameState } from "@/types/types";
import { createTiles } from "@/utils/createTiles";
import { shuffle } from "@/utils/shuffle";
import { INITIAL_TILE_VALUES, HAND_SIZE } from "@/constants/constants";


export const useGameStore = create<GameState>((set, get) => ({
  drawPile: [],
  discardPile: [],
  currentHand: [],
  previousHand: [],
  score: 0,
  tileValues: { ...INITIAL_TILE_VALUES },

// Initialize the game state with a shuffled set of tiles
  startGame: () => {
    const tiles = shuffle(createTiles());
    // reset all game state to initial values
    set({
      drawPile: tiles,
      discardPile: [],
      currentHand: [],
      previousHand: [],
      score: 0,
      tileValues: { ...INITIAL_TILE_VALUES },
    });
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