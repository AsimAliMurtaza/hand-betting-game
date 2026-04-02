import { TileType } from "@/types/types";

export const INITIAL_TILE_VALUES: Record<string, number> = {
  redDragon: 5,
  greenDragon: 5,
  whiteDragon: 5,
  eastWind: 5,
  westWind: 5,
  northWind: 5,
  southWind: 5,
};

export const TILE_TYPE_MAP: Record<string, TileType> = {
  redDragon: "dragon",
  greenDragon: "dragon",
  whiteDragon: "dragon",

  eastWind: "wind",
  westWind: "wind",
  northWind: "wind",
  southWind: "wind",
};


export const TILE_GROUPS = {
  dragon: ["redDragon", "greenDragon", "whiteDragon"],
  wind: ["eastWind", "westWind", "northWind", "southWind"],
};

export const ALL_NON_CHAR_TILES = Object.values(TILE_GROUPS).flat();


export const DECK_STACK_LAYER_SIZE = 5;
export const HAND_SIZE = 3;
export const MAX_RESHUFFLES = 2;