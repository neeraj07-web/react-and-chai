import {createContext, useContext} from "react" // import karlo

export const TodoContext = createContext({
    todos: [
        // default value-->initial value
        {
            id: 1,
            todo: " Todo msg",
            completed: false, // by default 
        }
    ],
    addTodo: (todo) => {}, // todo is a functionality --> which we'll use in App.jsx
    updateTodo: (id, todo) => {}, // 2 functionality
    deleteTodo :(id) =>{},
    toggleComplete: (id) => {}
})

// custom hook 
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider