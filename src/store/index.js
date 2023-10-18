import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return { counter: state.counter + action.value };
    case 'SUB':
      return { counter: state.counter - action.value };
    default:
      return { ...state };
  }
};

const store = createStore(counterReducer);

export default store;
