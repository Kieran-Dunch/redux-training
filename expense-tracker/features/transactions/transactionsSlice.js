import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {},
  reducers: {
    addTransaction: (state, action) => {
      const { category } = action.payload;
      if (!state[category]) {
        state[category] = [];
      }
      state[category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      const { category, id } = action.payload;
      const deletedIndex = state[category].findIndex(
        (transaction) => transaction.id === id
      );
      state[category].splice(deletedIndex, 1);
    },
  },
});

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);


export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
