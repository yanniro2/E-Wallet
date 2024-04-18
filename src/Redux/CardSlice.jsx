import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    activeCardIndex: null,
    isAddingNewCard: false,  // New state to track if adding a new card
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card, index) => index !== action.payload);
    },
    setActiveCard: (state, action) => {
      state.activeCardIndex = action.payload;
    },
    updateCard: (state, action) => {
      const { index, updatedCardData } = action.payload;
      state.cards[index] = updatedCardData;
    },
    setIsAddingNewCard: (state, action) => { // New reducer to handle the isAddingNewCard state
      state.isAddingNewCard = action.payload;
    },
  },
});

// Exporting the new action
export const { addCard, removeCard, setActiveCard, updateCard, setIsAddingNewCard } = cardSlice.actions;

export default cardSlice.reducer;
