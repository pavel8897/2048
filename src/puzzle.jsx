import React, { useEffect, useState } from 'react';

function Puzzle() {
    useEffect(() => {
        let canvas = document.querySelector('.canvas');
        let image = new Image();
        image.src = 'img1.jpg';

        image.onload = function () {
            let rowNum = 3;
            let colNum = 3;
            let arr = [];
            
            for (let i = 0; i < rowNum; i++) {
                for (let j = 0; j < colNum; j++) {
                    if (i == rowNum - 1 && j == colNum - 1) {
                        arr.push({});
                    } else {
                        arr.push({ row: i, col: j });
                    }
                }
            }

            let mainArr = arr.slice();    
            
            function drawPic(arr) {
                canvas.innerHTML = '';

                let widthPic = image.width / rowNum;
                let heightPic = image.height / colNum;
                canvas.style.gridTemplateColumns = `repeat(${rowNum}, ${widthPic}px)`;

                arr.forEach(item => {
                    let chunk = document.createElement('canvas');
                    chunk.width = widthPic;
                    chunk.height = heightPic;

                    let ctx = chunk.getContext('2d');

                    let x = item.col * widthPic;
                    let y = item.row * heightPic;

                    ctx.drawImage(image, x, y, widthPic, heightPic, 0, 0, widthPic, heightPic);

                    let div = document.createElement('div');
                    div.appendChild(chunk);
                    canvas.appendChild(div);
                });
                // win(arr, mainArr);
            }

            function win(arr, mainArr) {            
                if (JSON.stringify(arr) === JSON.stringify(mainArr)) {
                    alert('win!');
                }
            }

            function ArrowLeft() {
                let moved = false;
                arr.forEach((item, i) => {
                    if(!moved) {
                        if (Object.getOwnPropertyNames(item).length === 0) {                        
                            if (i % rowNum == 0) {
                                
                            } else {
                                let temp1 = arr[i - 1];
                                let temp2 = arr[i];
                                arr[i] = temp1;
                                arr[i - 1] = temp2;
                                moved = true;
                            }
                        }
                    }
                })
                drawPic(arr);
            }

            function arrowRight() {
                let moved = false;
                arr.forEach((item, i) => {
                    if(!moved) {
                        if (Object.getOwnPropertyNames(item).length === 0) {
                            if((i + 1) % rowNum == 0) {

                            } else {
                                let temp2 = arr[i + 1];
                                let temp1 = arr[i];
                                arr[i] = temp2;
                                arr[i + 1] = temp1;
                                moved = true;
                            }
                        }
                    }
                })
                drawPic(arr);
            }

            function ArrowUp() {
                let moved = false;
                arr.forEach((item, i) => {
                    if(!moved) {
                        if (Object.getOwnPropertyNames(item).length === 0) {
                            if(!arr[i - rowNum]) {
                            
                            } else {
                                let temp2 = arr[i - colNum];
                                let temp1 = arr[i];
                                arr[i] = temp2;
                                arr[i - colNum] = temp1;
                                moved = true;
                            }
                        }
                    }
                })
                drawPic(arr);
            }

            function ArrowDown() {
                let moved = false;
                arr.forEach((item, i) => {
                    if(!moved) {
                        if (Object.getOwnPropertyNames(item).length === 0) {
                            if(!arr[i + colNum]) {

                            } else {
                                let temp2 = arr[i + colNum];
                                let temp1 = arr[i];
                                arr[i] = temp2;
                                arr[i + colNum] = temp1;
                                moved = true;
                            }
                        }
                    }
                })
                drawPic(arr);
            }

            function clickBtn(e) {
                if (e.key == 'ArrowLeft') {
                    ArrowLeft();
                }

                if (e.key == 'ArrowRight') {
                    arrowRight();
                }

                if (e.key == 'ArrowUp') {
                    ArrowUp();
                }

                if (e.key == 'ArrowDown') {
                    ArrowDown();
                }
            }

            drawPic(arr);
            window.addEventListener('keydown', clickBtn);
        }
    }, []);

    return(
        <></>
    )
}

export default Puzzle;