import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myState: '',
};

const { actions, reducer } = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

export const {
  reset,
} = actions;

export default reducer;
