export type TileType = "number" | "dragon" | "wind";

export type Tile = {
  id: string;
  type: TileType;
  label: string;
};