import React, { useState, useEffect } from 'react';
import './field.css';

function Field({cells, gridSize}) {
    function getRandomCell() {
        let emptyArr = [];
        for(let i = 0; i < gridSize; i++) {
            for(let j = 0; j < gridSize; j++) {
                if(!cells[i][j]) {
                    emptyArr.push({row: i, col: j});
                }
            }
        }
        if(cells.length == 0) return null;
        return emptyArr[Math.floor(Math.random() * (emptyArr.length))];
    }
    
    function addCount() {
        let cell = getRandomCell();
        if(cell) {
            cells[cell.row][cell.col] = Math.random() < 0.9 ? 2 : 4;
        }
        return cells;
    }

    function outField() {
        let field = document.querySelector('.field');
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            let tile = cells[i][j];
            let cell = document.createElement('div');              
            cell.classList.add('box');
            cell.innerHTML = tile ? tile : '';
            field.appendChild(cell);
          }
        }
    }

    addCount();
    
    useEffect(() => {
        outField();
    }, []);
}

export default Field;

