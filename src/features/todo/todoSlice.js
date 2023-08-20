import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, text: 'hello' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
