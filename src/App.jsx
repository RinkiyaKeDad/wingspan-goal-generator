import { useState } from 'react';
import './App.css'
import Header from './Header'
import Goal from './Goal';


function App() {
  const [arr, setArr] = useState(generateRandomNumbers())

  function generateRandomNumbers() {
    let set = new Set();
    while (set.size != 4) {
      set.add(getRandomInt(8))
    }
    let arr = [];
    for (let num of set) {
      arr.push(num)
    }
    return arr
  }

  return (
    <div className='container'>
      <Header />
      <button onClick={() => setArr(generateRandomNumbers)}> Generate</button>
      <div className='goal-table'>
        {arr.map((val, index) => <Goal round={index} tile={val} side={getRandomInt(2)} />)}
      </div>
      <div className='para'> 
        <a href='https://boardgamegeek.com/boardgame/266192/wingspan' target="_blank">Wingspan</a> is a card-driven engine-building board game made by Elizabeth Hargrave and Stonemaier Games. In the game the players assume the role of bird enthusiasts who are attract the best birds to their aviaries. The goal in the game is to score the most points by placing birds and laying eggs in different habitats.

        The game plays over four rounds. This website helps you pick the end of round goals by selecting 4 out of the 16 available options for you at random.
      </div>
    </div>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default App
