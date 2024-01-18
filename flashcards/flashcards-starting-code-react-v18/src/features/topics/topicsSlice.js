import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = { id, name, icon, quizIds: [] };
    }
  }
});

// create a selector
export const selectTopics = state => state.topics;

// export the reducer
export default topicsSlice.reducer;

// export the action creators
export const { addTopic } = topicsSlice.actions;
