// import shortid from 'shortid';
// import types from './todos-types';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoErro');
export const deleteTodo = createAction('todos/delete');
export const toggleCompleted = createAction('todos/toggleCompleted');
export const changeFilter = createAction('todos/changeFilter');

axios.defaults.baseURL = 'http://localhost:3000/todos';

const addTodo = (text) => (dispatch) => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());

  return axios
    .post('/todos', todo)
    .then(({ data }) =>
      dispatch(addTodoSuccess(data)).catch((error) =>
        dispatch(addTodoError(error))
      )
    );
};

// const addTodo = (text) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

export default { addTodo };
