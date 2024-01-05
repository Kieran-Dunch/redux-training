import { fetchRecipes } from '../../app/api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const loadRecipes = createAsyncThunk(
  'allRecipes/loadRecipes',
  async () => {
    const data = await fetchRecipes();
    const json = await data.json();
    return json;
  }
);

// The above call to createAsyncThunk will generate what three action types?
// 1. allRecipes/loadRecipes/pending
// 2. allRecipes/loadRecipes/fulfilled
// 3. allRecipes/loadRecipes/rejected

// createSlice will generate the action creators and action types for the
// reducers defined in the reducers object. The action types will be prefixed
// with the name of the slice, in this case allRecipes. So the action type
// for the addRecipes reducer will be allRecipes/addRecipes.

// the problem is that the createSlice can't handle the action types generated
// by createAsyncThunk. So we need to use the extraReducers object to handle
// those action types.

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },
  extraReducers: {
    [loadRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },
    [loadRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export default allRecipesSlice.reducer;
