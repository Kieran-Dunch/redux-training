import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {},
  },
  reducers: {
    addCard(state, action) {
      state.cards[action.payload.id] = action.payload;
    }
  },
});

// selector to return card by id
export const selectCardById = (state, id) => state.cards.cards[id];

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
