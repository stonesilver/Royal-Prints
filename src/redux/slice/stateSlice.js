import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    cartIsOpen: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartIsOpen = !state.cartIsOpen;
    },
  },
});

export const { toggleCart } = stateSlice.actions;

export default stateSlice.reducer;
