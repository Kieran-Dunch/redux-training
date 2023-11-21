import { store, increment, decrement } from "./store"

// you can subscribe to the store to listen for changes
// the subscribe method takes in a callback function
// the callback function is called whenever an action is dispatched
// the callback function is called with the current state
store.subscribe(() => {
  console.log(store.getState());
});

// now each time and action is called, the store will log the current state

store.dispatch(decrement()); // store.getState() === -1
store.dispatch(increment()); // store.getState() === 0
store.dispatch(increment()); // store.getState() === 1
