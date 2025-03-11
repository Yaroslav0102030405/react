import shortid from 'shortid';
import types from './todos-types';

const addTodo = (text) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

export default { addTodo };
