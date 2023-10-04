import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { mainReducer } from "./reducer.jsx";

const cellsTable = combineReducers({
    root: mainReducer
})

export const store = configureStore({
    reducers: cellsTable
})