import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  // so here we are adding a todo..
  // lets first make states..

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Todo can't be empty");
      return;
    }
    dispatch(addTodo(input)); // when this was not here, we had to send all this action.payload and other things, but now we can just give the "input" as the input to the Todo.

    // ok, we done this but we didnt clear the input field after the user has submitted the new todo..
    setInput(""); // so we selected the input and cleaned it..
  };

  const updateTodoHandler = (e) => {
    setInput("hi");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;


