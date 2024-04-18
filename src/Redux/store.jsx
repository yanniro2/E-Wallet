import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './CardSlice';

const store = configureStore({
  reducer: {
    card: cardReducer,
    // Add other slice reducers here as you create them
  },
});

export default store;
