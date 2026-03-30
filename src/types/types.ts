export type TileType = "number" | "dragon" | "wind";

export type Tile = {
  id: string;
  type: TileType;
  label: string;
};

export type BetType = "higher" | "lower";

// Game state type definition. Includes the current state of the game and functions to manipulate it.
export type GameState = {
  drawPile: Tile[];
  discardPile: Tile[];
  currentHand: Tile[];
  previousHand: Tile[];
  currentValue: number;
  previousValue: number;
  score: number;
  tileValues: Record<string, number>;

  startGame: () => void;
  drawHand: () => void;
  placeBet: (bet: BetType) => void;
};
