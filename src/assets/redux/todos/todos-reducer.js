import { combineReducers } from 'redux';
import types from './todos-types';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  toggleCompleted,
  changeFilter,
} from './todos-actions';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     default:
//       return state;
//   }
// };

const items = createReducer([], (builder) => {
  builder
    .addCase(addTodoSuccess, (state, { payload }) => {
      return [...state, payload];
    })
    .addCase(deleteTodo, (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    })
    .addCase(toggleCompleted, (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    });
});

const filter = (state = [], action) => state;

export default combineReducers({ items, filter });
