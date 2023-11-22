// connecting store and app together
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store';

const root = createRoot(document.getElementById('app'));

// store state change listener
const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
};


render();

// subscribe to state changes
store.subscribe(render);
