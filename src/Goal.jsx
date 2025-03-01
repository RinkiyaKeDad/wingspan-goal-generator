import './Goal.css'

import goal00 from './assets/goal-00.jpg';
import goal01 from './assets/goal-01.jpg';
import goal10 from './assets/goal-10.jpg';
import goal11 from './assets/goal-11.jpg';
import goal20 from './assets/goal-20.jpg';
import goal21 from './assets/goal-21.jpg';
import goal30 from './assets/goal-30.jpg';
import goal31 from './assets/goal-31.jpg';
import goal40 from './assets/goal-40.jpg';
import goal41 from './assets/goal-41.jpg';
import goal50 from './assets/goal-50.jpg';
import goal51 from './assets/goal-51.jpg';
import goal60 from './assets/goal-60.jpg';
import goal61 from './assets/goal-61.jpg';
import goal70 from './assets/goal-70.jpg';
import goal71 from './assets/goal-71.jpg';

function Goal({round ,tile, side }) {
    let goals = [
        [goal00, goal01],
        [goal10, goal11],
        [goal20, goal21],
        [goal30, goal31],
        [goal40, goal41],
        [goal50, goal51],
        [goal60, goal61],
        [goal70, goal71]
    ];
    return (
        <div key={round+1} className='goal'>
            <img src={goals[tile][side]} alt={`Round ${round+1} Goal`} />
        </div>
    )
}

export default Goal