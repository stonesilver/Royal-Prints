import { createSlice } from '@reduxjs/toolkit';

export const stateSlice = createSlice({
  name: 'state',
  initialState: {
    activeModal: '',
  },
  reducers: {
    toggleCart: (state, action) => {
      state.activeModal = action.payload;
    },
  },
});

export const { toggleCart } = stateSlice.actions;

export default stateSlice.reducer;
