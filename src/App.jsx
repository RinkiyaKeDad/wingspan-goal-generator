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
        {/* <div className='goal'>
          <img src={goals[arr[0]][getRandomInt(2)]} alt="Round 1 Goal" />
        </div>
        <div className='goal'>
          <img src={goals[arr[1]][getRandomInt(2)]} alt="Round 2 Goal" />
        </div>
        <div className='goal'>
          <img src={goals[arr[2]][getRandomInt(2)]} alt="Round 3 Goal" />
        </div>
        <div className='goal'>
          <img src={goals[arr[3]][getRandomInt(2)]} alt="Round 4 Goal" />
        </div> */}
      </div>
    </div>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default App
