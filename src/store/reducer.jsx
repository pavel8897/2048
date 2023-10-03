import { createReducer } from "@reduxjs/toolkit";
import { useReducer } from "react";

let gridSize = 4;
let arr = [];
for(let i=1;i<=gridSize;i++) {
    for(let j=1;j<=gridSize;j++) {
        arr.push({row: i, col: j});
    }
}

export const rootReducer = {
    cells: arr
}
