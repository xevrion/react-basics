import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';



export const store = configureStore({
    reducer: todoReducer // here we can give the whole list of reducers, but since we have only one slice, we will just give the todoReducer.
})


// All applications have only one store.. usse zyada lena is strictly not advised at all.. and also the store is the one and only source of truth for the application..

// Ye ek syntax hai documentation me.. that we call features as slice ..