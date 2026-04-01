A simple **hand-betting card game** built with Next.js, Chakra UI, and Zustand. Players draw hands from a shuffled deck and bet whether the next hand’s value will be **higher** or **lower**, while managing evolving tile values and reshuffles.

---

## Features

* **Deck and discard pile management**
* **Hand betting system**
* **Dynamic tile values**
* **Score tracking** 
* **Leaderboard**
* **Game over conditions**:

  * Tile value reaches 0 or 10
  * Deck reshuffles exceed maximum allowed

---

## Tech Stack

* **Frontend Framework:** Next.js
* **UI Library:** Chakra UI
* **State Management:** Zustand
* **Language:** TypeScript
* **Persistence:** LocalStorage

---

## Setup

1. Clone the repository:

```bash
git clone <https://github.com/AsimAliMurtaza/hand-betting-game>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open the app:

```
http://localhost:3000
```

---

## How to Play

1. **Start a New Game**

   * Click the **“New Game”** button on the landing page.
   * The first hand is automatically drawn and displayed.

2. **Bet Higher or Lower**

   * Look at your current hand value.
   * Click **Higher** if you think the next hand will be greater.
   * Click **Lower** if you think the next hand will be smaller.

3. **Score & History**

   * Score increases if your bet is correct.
   * All previous hands and their values are recorded in the **History panel**.

4. **Deck Management**

   * Draw Pile and Discard Pile counts are shown in the Score panel.
   * When the draw pile runs out, the discard pile is reshuffled.
   * Maximum reshuffles allowed is 3 by default.

5. **Dynamic Tile Values**

   * Special tiles (dragons/winds) increase or decrease in value depending on whether you win or lose a hand.
   * Tile values evolve over time, making gameplay strategic.

6. **Game Over Conditions**

   * Tile value reaches 0 or 10 → game over
   * Maximum reshuffles exceeded → game over

7. **Leaderboard**

   * Your score is saved locally and displayed in the **Leaderboard** panel.
   * Top 5 scores are tracked across sessions.

---

## Project Structure

```
/app
  /game        # Game page and App Router
  page.tsx     # Landing page

/components
  ScorePanel.tsx
  Controls.tsx
  HandView.tsx
  TileCard.tsx
  HistoryView.tsx
  Leaderboard.tsx
  GameOverModal.tsx

/stores
  store.ts     # Zustand store for game state

/utils
  createTiles.ts
  shuffle.ts
  calculateHandValue.ts
  updateTileValues.ts
  checkGameOver.ts
  reshuffle.ts

/constants
  constants.ts
```

---

## UI & Design

* **Responsive layout**: Game panel on left, history on right
* **Tile cards**: Color-coded, hover animation, shows type & emoji/icon
* **Score panel**: Shows score, current hand value, reshuffles, draw/discard pile counts
* **Leaderboard**: Persistent top scores
* **Landing page**: Full-screen background, “New Game” button, leaderboard