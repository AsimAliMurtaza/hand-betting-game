export function checkTileLimits(tileValues: Record<string, number>) {
  // Checks if any tile value has reached the game over limits (0 or 10) by iterating through the values in the tileValues object
  // and returning true if any value is less than or equal to 0 or greater than or equal to 10.
  return Object.values(tileValues).some((value) => value <= 0 || value >= 10);
}
