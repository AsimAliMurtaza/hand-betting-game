const KEY = "betting_game_leaderboard";

export function getLeaderboard(): number[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

// Updates the leaderboard by adding the new score, sorting the scores in descending order, and keeping only the top 5 scores before saving it back to localStorage.
export function updateLeaderboard(score: number) {
  const current = getLeaderboard();

  const updated = [...current, score]
    .sort((a, b) => b - a)
    .slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(updated));
}