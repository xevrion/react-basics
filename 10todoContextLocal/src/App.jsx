import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // setTodos(todo) // aise kar dege to purani values ko replace krke nayi bas 1 todo set hogii..
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (todo) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // jo match nahi karega.. vo aata jayega... jo match karega.. vo reh jayega.... matlab vo delete ho gya :) vapas update ni hua vo.. aisa smjh lo..
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  // local storage me store karna to easy hai.. but vo hamesha string format me store hota hai... to kabhi bhi use karna ho or smth.. we have to convert it in json...
  // koi aisa method hai jo page load hote hi... local storage se data nikal ke.. sidha page me show karde..?? btao btao.... which is use effect


  // jab tk aap react me ho.. and server side rendering ki baat nahi kr rhe ho.. tb tk aap local storage ko access kar skte ho..
  useEffect(() => {
    // localStorage.getItem("todos") // get krna pehle zruri hai.. set se.. kyun??
    const todos = JSON.parse(localStorage.getItem("todos")) // idhar tk 50% local storage khtm.. LMAO DEAD

    if(todos && todos.length){
      setTodos(todos)
    } // to check if todos exist or not... nahi hai to application crash mar degi na..
  }, [])
  
  // btw we can use multiple useEffect too...
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full">
                <TodoItem todo={todo}/>

              </div>
            ))}

            {/* damn.. curly braces lagayege to hume value return karni padti hai js me.. but agar normal round braces lagate hai to auto return ho jata hai... */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
