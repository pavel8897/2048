import React from 'react';
import './box.css';

function randomIntFromInterval(min, max) {
    let arr = []
    while(arr.length <= 1) {
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        
        if(arr.indexOf(num) == -1) {
            arr.push(num);
        }
    }
    return arr;
}

let int = randomIntFromInterval(1, 16);

function Box({name}) {
    if(int.indexOf(name) == -1) {
        return <div className='box'></div>
    } else {
        return <div className='box active'>2</div>
    }    
}

export default Box;

