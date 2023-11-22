// using our redux store in a react application
import React from 'react';
import { increment, decrement } from './store';

function App({ state, dispatch }) {
  // dispatch incrememnt action
  const handleIncrement = () => {
    dispatch(increment());
  };
  // dispatch decrement action
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <main>
      <p id='counter'>{state}</p>
      <button id='incrementer' onClick={handleIncrement}>+</button>
      <button id='decrementer' onClick={handleDecrement}>-</button>
    </main>
  )
}

export default App;
