import { createReducer } from "@reduxjs/toolkit";

let gridSize = 4;
let arr = [];
for(let i=1;i<=gridSize;i++) {
    for(let j=1;j<=gridSize;j++) {
        arr.push({row: i, col: j});
    }
}

const initialState = {
    cells: arr
}

export default function mainReducer (state = initialState, action) {
    switch(action.type) {
        case "COUNT":
            return state
        default:
            return state
    }
}
