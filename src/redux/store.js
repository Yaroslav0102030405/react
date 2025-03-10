import { createStore } from 'redux';

const reducer = (state = { a: 5 }, action) => state;

const store = createStore(reducer, { a: 10 });

export default store;
