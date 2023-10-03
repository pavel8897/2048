import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { rootReducer } from "./reducer.jsx";

const cellsTable = combineReducers({
    root: rootReducer
})

export const store = configureStore({
    reducers: cellsTable
})