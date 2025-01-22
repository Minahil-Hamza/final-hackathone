// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your reducer for the cart state

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Ensure your cart state is correctly set up
  },
});

export type RootState = ReturnType<typeof store.getState>; // RootState type
export default store;
