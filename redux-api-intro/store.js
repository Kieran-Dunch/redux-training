import { createStore } from 'redux'

const initialState = 0;

// action creators are functions that return an action
// an action is an object that has a type property
// the type property is a string that describes the action
// the purpose of this is to reduce the amount of typos
// that can occur when dispatching actions
export const increment = () => {
  return {
    type: "increment",
  };
};

export const decrement = () => {
  return {
    type: "decrement",
  };
}

// the reducer is a function that takes in the current state and an action
// the reducer returns the new state based on the action
// the reducer is called whenever an action is dispatched
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

// creating a store to reinforce the one-way data flow of redux
// the store is the single source of truth for the application
// the store is created by passing in the reducer

export const store = createStore(countReducer);

store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());
