import { Tile } from "@/types/types";

export function calculateHandValue(
  hand: Tile[],
  tileValues: Record<string, number>
): number {
  return hand.reduce((sum, tile) => {
    if (tile.type === "number") {
      return sum + Number(tile.label);
    }

    return sum + (tileValues[tile.label] ?? 5);
  }, 0);
}