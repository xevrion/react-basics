import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {

    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()



    const add = (e) => {
        e.preventDefault()

        if(!todo) return
        
        // addTodo({id: Date.now(), todo: todo, completed: false}) // isko dusri tarh bhi likh skte hai...
        addTodo({todo, completed: false}) // udhar app.jsx me date.now de rkhi hai.. to idhar se hata do.. and new syntax me field and value ka name same hai.. to bas koi ek bhi dedo to bhi chalega...
        setTodo("")
    }



  return (
    <form 
    onSubmit={add}
    className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
