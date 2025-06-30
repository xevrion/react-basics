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
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // action.payload should be the id directly, not an object with id property.
        }, // state is the currentState of the slice, and action is the data attached.. (smth like that... smjh lo..)

        // Task: Make updateTodo function that will update the text of the todo.

        updateTodo: (state, action) => {
            const { id, text } = action.payload; // here we are destructuring the payload to get the id and text of the todo.

            const todo = state.todos.find((todo) => todo.id === id); // here we are finding the todo with the id that we got from the payload.

            if (todo) { // if the todo is found, then we will update the text of the todo.
                todo.text = text;
            }
        },


    } // so what does reducers include? it includes properties and functions that will modify the state.
})


// iske steps hai vo yaad rakho, itna bhi complex nahi hai, bas yaad rakhna hai ki createSlice se slice banta hai, usme name, initialState aur reducers hote hai. reducers me functions hote hai jo state ko modify karte hai.

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions // here we just exported individual functions from the slice, so that we can use them in the components.

export default todoSlice.reducer // here we exported the reducer of the slice, so that we can use it in the store.