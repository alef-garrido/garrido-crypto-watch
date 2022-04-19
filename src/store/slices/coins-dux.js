/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'coins',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    coinsLoaded: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default slice.reducer;
