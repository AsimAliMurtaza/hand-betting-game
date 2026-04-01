import { Tile } from "@/types/types";

export function calculateHandValue(
  hand: Tile[],
  tileValues: Record<string, number>
): number {
    // For each tile in the hand, if it's a number tile, add its numeric value to the sum. If it's a dragon or wind tile, add its corresponding value from the tileValues object (defaulting to 5 if not found).
  return hand.reduce((sum, tile) => {
    if (tile.type === "number") {
      return sum + Number(tile.label);
    }

    return sum + (tileValues[tile.label] ?? 5);
  }, 0);
}