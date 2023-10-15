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

    function moveRight() {
        for(let i = 0; i < gridSize; i++) {
            cells[i] = cells[i].filter(tile => tile);
            for(let j = cells[i].length - 1; j > 0; j--) {
                if(cells[i][j] === cells[i][j - 1]) {
                    cells[i][j] *= 2;
                    cells[i][j - 1] = null;
                }
            }
            cells[i] = cells[i].filter(tile => tile);
            while(cells[i].length < gridSize) {
                cells[i].unshift(null);
            }
        }
        addCount();
        outField();
    }

    function moveUp() {
        for(let i = 0; i < gridSize; i++) {
            let column = cells.map(row => row[i]).filter(tile => tile);
            for(let j = 0; j < column.length - 1; j++) {
                if(column[j] === column[j + 1]) {
                    column[j] *= 2;
                    column[j + 1] = null;
                }
            }
            let newColumn = column.filter(tile => tile);
            while(newColumn.length < gridSize) {
                newColumn.push(null);
            }
            for(let f = 0; f < gridSize; f++) {
                cells[f][i] = newColumn[f];
            }
        }
        addCount();
        outField();
    }

    function moveDown() {
        for(let i = 0; i < gridSize; i++) {
            let column = cells.map(row => row[i]).filter(tile => tile);
            for(let j = column.length - 1; j > 0; j--) {
                if(column[j] === column[j - 1]) {
                    column[j] *= 2;
                    column[j - 1] = null;
                }
            }
            let newColumn = column.map(tile => tile);
            while (newColumn.length < gridSize) {
                newColumn.unshift(null);
            }
            for(let f = 0; f < gridSize; f++) {
                cells[f][i] = newColumn[f];
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
            moveRight();
        }
        if(e.key == 'ArrowUp') {
            moveUp();
        }
        if(e.key == 'ArrowDown') {
            moveDown();
        }
    }

    addCount();
    addCount();
    window.addEventListener('keydown', keyPress);
    
    useEffect(() => {
        outField();
    }, []);
}

export default Field;

