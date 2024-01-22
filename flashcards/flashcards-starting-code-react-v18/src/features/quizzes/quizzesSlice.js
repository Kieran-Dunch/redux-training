import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {},
  },
  reducers: {
    addQuiz(state, action) {
      state.quizzes[action.payload.id] = action.payload;
    }
  },
});

// selector to return all quizzes from state
export const selectQuizzes = state => state.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
