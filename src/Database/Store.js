import { configureStore } from "@reduxjs/toolkit";
import listReducers from '../Slice/Slices'

export const store = configureStore({
    reducer : listReducers
})