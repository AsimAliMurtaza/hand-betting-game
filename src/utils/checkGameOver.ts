export function checkTileLimits(tileValues: Record<string, number>) {
  return Object.values(tileValues).some(
    (value) => value <= 0 || value >= 10
  );
}