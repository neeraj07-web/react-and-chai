
import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]) // by default empty array

  const addTodo = (todo) => {
    // prev se purana array mil jayega , purane aaray se purana data v rakh lo and naya data v rakho
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    // konsa todo hai jo id se match kar rha hai taki mei usse update kar saku
    // agar prevTodo ki id todo ki id se match karti hai toh naya todo de do nahi toh prevtodo hi rhne do
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) // map --> loop

  }

  const deleteTodo = (id) => {
    // delete karte waqt map use karna is not a good approach --->. rather use filter
    /// filter bolega jo jo id se match nahi kar rha uuse aane do --> jo match kar jayega usse nikal denge
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // toggle to cut the line if i have complete my task
  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo)) // sari values leli -> usse se bas completed ko change kar diya --> false to true kar do ,, true to false kardo
  }

  // use of local storage --> to get item --> .getItem 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    // wrapped all arounnd TodoProvider
    // TodoProvider kya kya values provvide karega
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
