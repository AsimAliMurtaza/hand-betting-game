import { Tile } from "@/types/types";
import { shuffle } from "./shuffle";

export function reshuffleIfNeeded(
  drawPile: Tile[],
  discardPile: Tile[],
  reshuffles: number,
  maxReshuffles: number
): {
  drawPile: Tile[];
  discardPile: Tile[];
  reshuffles: number;
  gameOver: boolean;
} {
  if (drawPile.length >= 3) return { drawPile, discardPile, reshuffles, gameOver: false };

  if (reshuffles >= maxReshuffles) {
    return { drawPile, discardPile, reshuffles, gameOver: true };
  }

  const newDeck = shuffle([...discardPile]);

  return {
    drawPile: newDeck,
    discardPile: [],
    reshuffles: reshuffles + 1,
    gameOver: false,
  };
}