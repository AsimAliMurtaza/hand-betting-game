import { Tile } from "@/types/types";

export function updateTileValues(
  hand: Tile[],
  tileValues: Record<string, number>,
  isWin: boolean,
): Record<string, number> {
  const updated = { ...tileValues };

  hand.forEach((tile) => {
    if (tile.type === "number") return;
    // For each non-number tile in the hand, it retrieves the current value from the tileValues object (defaulting to 5 if not found)
    const current = updated[tile.label] ?? 5;

    //it increments the value by 1 if the bet was correct (isWin is true) or decrements it by 1 if the bet was incorrect (isWin is false).
    let next = isWin ? current + 1 : current - 1;

    // clamp between 0 and 10
    next = Math.max(0, Math.min(10, next));

    updated[tile.label] = next;
  });

  return updated;
}
