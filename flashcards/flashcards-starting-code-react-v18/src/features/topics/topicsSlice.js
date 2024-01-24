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
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  },
  extraReducers: {
    'quizzes/addQuiz': (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

// create a selector
export const selectTopics = state => state.topics.topics;

// export the reducer
export default topicsSlice.reducer;

// export the action creators
export const { addTopic } = topicsSlice.actions;
