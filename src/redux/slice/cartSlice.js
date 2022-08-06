import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'state',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
