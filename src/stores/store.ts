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
    const {
      drawPile,
      currentHand,
      currentValue,
      tileValues,
      reshuffles,
      score,
      discardPile,
    } = get();

    if (drawPile.length < HAND_SIZE) {
      if (reshuffles >= MAX_RESHUFFLES) {
        set({
          isGameOver: true,
          gameOverReason: "deck_exhausted",
        });
        return;
      }

      const newDeck = shuffle([...discardPile, ...createTiles()]);

      set({
        drawPile: newDeck,
        reshuffles: reshuffles + 1,
      });
    }

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
    const hitTileLimit = checkTileLimits(updatedTileValues);

    set({
      previousHand: currentHand,
      currentHand: newHand,
      previousValue: currentValue,
      currentValue: newValue,
      drawPile: remaining,
      discardPile: [...get().discardPile, ...currentHand],
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
