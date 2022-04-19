import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import apiCalls from './middleware/apiCalls';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiCalls),
});

export default store;
