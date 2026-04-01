export function shuffle<T>(arr: T[]): T[] {
    // Shuffles an array using the Fisher-Yates algorithm, which iterates through the array from the last element to the first,
    // swapping each element with a randomly selected element that comes before it (including itself). 
    // This ensures a uniform random shuffle of the array.
  return [...arr].sort(() => Math.random() - 0.5);
}