import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";

const cellsTable = combineReducers({
    root: reducer
})

export const store = configureStore({
    reducers: cellsTable
})