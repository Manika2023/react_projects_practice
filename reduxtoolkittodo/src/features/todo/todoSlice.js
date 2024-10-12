import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load initial todos from local storage if available
const loadInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    return JSON.parse(savedTodos); // Return saved todos if available
  }
  return []; // Start with an empty list if no todos are saved
};

// initial state of store
const initialState = {
  todos: loadInitialTodos(), // Load todos from localStorage
};




// creating slice->next version of reducers
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);

      // Save updated todos to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    // Remove a todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      // Save updated todos to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    // Update a todo
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );

      // Save updated todos to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

// Exporting the actions
export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

// Exporting the reducer
export default todoSlice.reducer;
