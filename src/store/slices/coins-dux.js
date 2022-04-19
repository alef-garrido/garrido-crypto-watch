/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'coins',
  initialState: {
    list: [],
    isloading: false,
  },
  reducers: {
    coinsRequested: (state) => {
      state.isLoading = true;
    },
    coinsReceived: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    coinsRequestFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { coinsRequested, coinsReceived, coinsRequestFailed } = slice.actions;

// Action Creators

// to handle API request Stages
export const apiRequest = createAction('api/Request');
export const apiRequestSucceed = createAction('api/RequestSucceed');
export const apiRequestFailed = createAction('api/RequestFailed');

// to handle UI events
export const loadCoins = () => apiRequest({
  onStart: coinsRequested.type,
  onSuccess: coinsReceived.type,
  onError: coinsRequestFailed.type,
});

export default slice.reducer;
