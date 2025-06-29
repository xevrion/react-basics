import { createSlice, nanoid } from "@reduxjs/toolkit";

// nano id generates unique ids..
// createSlice is a function that creates a slice of the state.


const initialState = {
    todos: [{
        id: 1, text: "Hello world"
    }]
}


// now how will we make slice? 

export const todoSlice = createSlice({
    name: "todo",
    initialState, // we have only written the name of initialState here, it is defined above.
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // this time we'll use nanoid to generate unique ids.
                text: action.payload // action.payload is the data that we pass to the action when we dispatch it.
            } // till here, we just made the todo, but didnt update the state.

            state.todos.push(todo) // now we will push the todo to the todos array in the state.

        }, // we'll always get this 2 things, state and action. state is the current state of the slice, and action is the action that is dispatched to the slice.
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id) // same as we used in the previous todo app, here we'll just filter the todo which we don't want to have in the todos, so just we won't select that and won't replace it.. we'll put the other values in the todos.. and ignore the array which we want to remove by filtering it out.
         }, // state is the currentState of the slice, and action is the data attached.. (smth like that... smjh lo..)

        // Task: Make updateTodo function that will update the text of the todo.


    } // so what does reducers include? it includes properties and functions that will modify the state.
})


// iske steps hai vo yaad rakho, itna bhi complex nahi hai, bas yaad rakhna hai ki createSlice se slice banta hai, usme name, initialState aur reducers hote hai. reducers me functions hote hai jo state ko modify karte hai.

export const {addTodo, removeTodo} = todoSlice.actions // here we just exported individual functions from the slice, so that we can use them in the components.

export default todoSlice.reducer // here we exported the reducer of the slice, so that we can use it in the store.