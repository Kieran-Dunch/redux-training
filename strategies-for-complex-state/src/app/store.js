import { createStore, combineReducers } from 'redux';
import allRecipesData from '../data.js';

// Action Creators
////////////////////////////////////////

export const addRecipe = (recipe) => {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  };
}

export const removeRecipe = (recipe) => {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  };
}

export const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

export const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  };
}

export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  };
}

// Reducers
////////////////////////////////////////
// rewriting the reducer to only address one piece of state at a time
// also creating slice-specific initial state


const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return searchTerm;
  }
}

// Create the initial state for this reducer.
const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch (action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...favoriteRecipes, action.payload];
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id);
    default:
      return favoriteRecipes;
  }
}

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