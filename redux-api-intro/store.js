import { createStore } from 'redux'

const initialState = 0;

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

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
console.log(store.getState());
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
console.log(store.getState());
