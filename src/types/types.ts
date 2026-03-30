export type TileType = "number" | "dragon" | "wind";

export type Tile = {
  id: string;
  type: TileType;
  label: string;
};

// Game state type definition. Includes the current state of the game and functions to manipulate it.
export type GameState = {
  drawPile: Tile[];
  discardPile: Tile[];
  currentHand: Tile[];
  previousHand: Tile[];
  score: number;
  tileValues: Record<string, number>;

  startGame: () => void;
  drawHand: () => void;
};