const KEY = "betting_game_leaderboard";

export function getLeaderboard(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function updateLeaderboard(score: number) {
  const current = getLeaderboard();

  const updated = [...current, score]
    .sort((a, b) => b - a)
    .slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(updated));
}