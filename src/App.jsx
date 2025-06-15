import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Goal from "./Goal";

function App() {
  const [oceania, setOceania] = useState(false);
  const [arr, setArr] = useState([]);

  function generateRandomNumbers(oceania) {
    let set = new Set();
    let len = oceania ? 12 : 8;
    while (set.size != 4) {
      set.add(getRandomInt(len));
    }
    return [...set].map((tile) => ({ tile, side: getRandomInt(2) }));
  }

  // Initial generation
  useEffect(() => {
    setArr(generateRandomNumbers(oceania));
  }, [oceania]); // Only run once on mount

  return (
    <div className="container">
      <Header />
      <button onClick={() => setArr(generateRandomNumbers(oceania))}>
        Generate
      </button>
      <div>
        <input
          type="checkbox"
          id="oceania"
          name="oceania"
          value="Oceania"
          checked={oceania}
          onChange={() => setOceania(!oceania)}
        />
        Oceania
      </div>

      <div className="goal-table">
        {arr.map((goal, index) => (
          <Goal
            key={index}
            oceania={oceania}
            round={index}
            tile={goal.tile}
            side={goal.side}
          />
        ))}
      </div>
      <div className="para">
        <a
          href="https://boardgamegeek.com/boardgame/266192/wingspan"
          target="_blank"
        >
          Wingspan
        </a>{" "}
        is a card-driven engine-building board game made by Elizabeth Hargrave
        and Stonemaier Games. In the game the players assume the role of bird
        enthusiasts who are attract the best birds to their aviaries. The goal
        in the game is to score the most points by placing birds and laying eggs
        in different habitats. The game plays over four rounds. This website
        helps you pick the end of round goals by selecting 4 out of the 16
        available options for you at random.
      </div>
    </div>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default App;
