import { Tile } from "@/types/types";
import { DRAGONS, WINDS } from "@/constants/constants";

export function createTiles(): Tile[] {
  const tiles: Tile[] = [];

  // number tiles construction
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < 4; j++) {
      tiles.push({
        id: crypto.randomUUID(),
        type: "number",
        label: String(i),
      });
    }
  }

  // dragon and wind tiles construction 
  [...DRAGONS, ...WINDS].forEach((name) => {
    for (let i = 0; i < 4; i++) {
      tiles.push({
        id: crypto.randomUUID(),
        type: name.includes("Dragon") ? "dragon" : "wind",
        label: name,
      });
    }
  });

  return tiles;
}