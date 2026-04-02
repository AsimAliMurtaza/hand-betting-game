import { Tile } from "@/types/types";
import { shuffle } from "./shuffle";
import { createTiles } from "./createTiles";


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
  // Reshuffle the discard pile back into the draw pile
  const newDeck = shuffle([...createTiles(),...discardPile]);

  return {
    drawPile: newDeck,
    discardPile: [],
    reshuffles: reshuffles + 1, // Increment the reshuffle count
    gameOver: false, 
  };
}