import { createStore, combineReducers } from 'redux';

import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice';

// use combineReducers to create a single reducer from multiple reducers

const reducers = {
  allRecipes: allRecipesReducer,
  searchTerm: searchTermReducer,
  favoriteRecipes: favoriteRecipesReducer
}

// with combineReducers:
const rootReducer = combineReducers(reducers);

// without combineReducers:
// const rootReducer = (state = {}, action) => {
//   const nextState = {
//     allRecipes: allRecipesReducer(state.allRecipes, action),
//     searchTerm: searchTermReducer(state.searchTerm, action),
//     favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
//   }
//   return nextState;
// }

export const store = createStore(rootReducer);
