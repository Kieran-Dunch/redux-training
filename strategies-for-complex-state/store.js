// start with initial state
const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ""
}

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
