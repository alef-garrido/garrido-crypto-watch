/* eslint-disable consistent-return */
import axios from 'axios';
import { apiRequest, apiRequestFailed, apiRequestSucceed } from '../slices/coins-dux';

const apiCalls = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiRequest.type) return next(action);
  next(action);

  const {
    onSuccess, onStart, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const apiResponse = await axios.get('https://api.coincap.io/v2/assets')
      .then((data) => data.data.data);
    dispatch(apiRequestSucceed(apiResponse));
    if (onSuccess) dispatch({ type: onSuccess, payload: apiResponse });
  } catch (error) {
    dispatch(apiRequestFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default apiCalls;
