import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    cart: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cart = !state.cart;
    },
  },
});

export const { toggleCart } = stateSlice.actions;

export default stateSlice.reducer;
