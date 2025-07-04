import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}] // forming an array
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState, // har ke reducer ka initial state hota hai
    reducers: {

        // forming reducer, reducer---> properties + function
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // id is exported from nanoid
                text: action.payload // action _--> Payload (object)
            }
            state.todos.push(todo) // 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // jo id thi usse match  mat karo baki dsab ko le aao
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

// store should be aware of all the reducerr--> bcz this store is a restricted store
export default todoSlice.reducer