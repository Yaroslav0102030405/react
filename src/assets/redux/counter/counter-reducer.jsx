import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actionTypes from './counter-types';
// import { createAction } from '@reduxjs/toolkit';
// import actions from './counter-actions';
// console.log(actions.increment.type);

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const initialState = { value: 0 };

// const increment = createAction('increment');
// const decrement = createAction('decrement');

const valueReducer = createReducer(0, (builder) => {
  builder
    .addCase(actionTypes.INCREMENT, (state, action) => {
      return state + action.payload;
    })
    .addCase(actionTypes.DECREMENT, (state, action) => {
      return state - action.payload;
    });
});

// const stepReducer = (state = 1, action) => state;

const stepReducer = createReducer(1, (builder) => {
  builder.addCase(actionTypes.INCREMENT, (state, action) => {
    return state;
  });
});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
