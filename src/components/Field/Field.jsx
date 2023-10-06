import React, { useState } from 'react';
import Box from '../Box/Box.jsx';
import './field.css';

function Field({arr}) {
    console.log(arr)
    function getRandomCell() {
        let emptyArr = []
        arr.forEach(item => {
            if(!item.count) {
                emptyArr.push(item)
            }
        })
        return emptyArr[Math.floor(Math.random() * (emptyArr.length))]
    }
    
    getRandomCell()

    return (
        <div className="field">
            
        </div>
    )
}

export default Field;

