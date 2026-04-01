export type TileType = "number" | "dragon" | "wind" | "panda";

export type Tile = {
  id: string;
  type: TileType;
  label: string;
};

export type BetType = "higher" | "lower";

type GameOverReason = "tile_limit" | "deck_exhausted" | null;

export type TileProps = {
  tile: Tile;
  tileValues: Record<string, number>;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
};

export type HistoryItem = {
  hand: Tile[];
  value: number;
};

// Game state type definition.
export type GameState = {
  drawPile: Tile[];
  discardPile: Tile[];
  currentHand: Tile[];
  previousHand: Tile[];
  currentValue: number;
  previousValue: number;
  score: number;
  tileValues: Record<string, number>;
  isGameOver: boolean;
  gameOverReason: GameOverReason;
  reshuffles: number;
  history: {
    hand: Tile[];
    value: number;
  }[];
  startGame: () => void;
  placeBet: (bet: BetType) => void;
};
