import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';



export const store = configureStore({
    reducer: todoReducer // here we can give the whole list of reducers, but since we have only one slice, we will just give the todoReducer.
})