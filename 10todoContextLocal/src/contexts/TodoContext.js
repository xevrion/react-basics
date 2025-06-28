import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        } // abhi bas ainwei hi rakh rhe hai.. so that we know how to make it.. baki normally it should be an empty array at the start..
    ],
    addTodo: (todo) => {}, // idhar bas hum funcntion ko initialize kar rhe hai... functionality baad me app.jsx ke andar code karege...
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

})

// boht sari functionalities hai.. iss project me.. :)





export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider