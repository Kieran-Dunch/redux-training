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


const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return {
        ...state,
        searchTerm: action.payload
      };
    case 'searchTerm/clearSearchTerm':
      return {
        ...state,
        searchTerm: ""
      };
    case 'allRecipes/loadData':
      return {
        ...state,
        allRecipes: action.payload
      };
    case 'favoriteRecipes/addRecipe':
      return {
        ...state,
        favoriteRecipes: [...state.favoriteRecipes, action.payload]
      };
    case 'favoriteRecipes/removeRecipe':
      return {
        ...state,
        favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
      };
    default:
      return state;
  }
}
