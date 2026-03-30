import { Tile } from "@/types/types";

export function updateTileValues(
  hand: Tile[],
  tileValues: Record<string, number>,
  isWin: boolean
): Record<string, number> {
  const updated = { ...tileValues };

  hand.forEach((tile) => {
    if (tile.type === "number") return;

    const current = updated[tile.label] ?? 5;

    let next = isWin ? current + 1 : current - 1;

    // clamp between 0 and 10
    next = Math.max(0, Math.min(10, next));

    updated[tile.label] = next;
  });

  return updated;
}