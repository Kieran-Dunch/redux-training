import { createSlice } from "@reduxjs/toolkit";

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
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

export const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const { category, amount } = action.payload;
      const existingBudget = state.find(
        (budget) => budget.category === category
      );
      if (existingBudget) {
        existingBudget.amount = amount;
      }
    },
  }
});


export const editBudget = (budget) => {
  return {
    type: "budgets/editBudget",
    payload: budget,
  };
};

export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;
