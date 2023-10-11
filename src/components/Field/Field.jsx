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
        field.innerHTML = '';
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

    function moveLeft() {
        for (let i = 0; i < gridSize; i++) {          
          cells[i] = cells[i].filter(tile => tile);          
          for (let j = 0; j < cells[i].length - 1; j++) {
            if (cells[i][j] === cells[i][j + 1]) {
                cells[i][j] *= 2;
                cells[i][j + 1] = null;
            }
          }
          cells[i] = cells[i].filter(tile => tile);
          while (cells[i].length < gridSize) {
            cells[i].push(null);
          }
        }
        addCount();
        outField();
    }

    function keyPress(e) {
        if(e.key == 'ArrowLeft') {
            moveLeft();
        }
        if(e.key == 'ArrowRight') {
            console.log('right');
        }
        if(e.key == 'ArrowUp') {
            console.log('up');
        }
        if(e.key == 'ArrowDown') {
            console.log('down');
        }
    }

    addCount();
    addCount();
    window.addEventListener('keydown', keyPress)
    
    useEffect(() => {
        outField();
    }, []);
}

export default Field;

