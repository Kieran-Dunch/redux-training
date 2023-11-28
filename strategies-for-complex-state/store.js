import allRecipesData from './data.js';

// start with initial state
const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ""
}

// action creators
export const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  };
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
