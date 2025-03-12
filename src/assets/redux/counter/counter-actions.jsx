import actionTypes from './counter-types';
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/Increment', (value) => ({
  type: actionTypes.INCREMENT,
  payload: value,
}));

export const decrement = createAction('counter/Decrement', (value) => ({
  type: actionTypes.DECREMENT,
  payload: value,
}));

// export default { increment, decrement };
