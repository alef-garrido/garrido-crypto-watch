/* eslint-disable consistent-return */
import { apiRequest, apiRequestFailed, apiRequestSucceed } from '../slices/coins-dux';

const apiCalls = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiRequest.type) return next(action);
  next(action);

  const {
    method, onSuccess, onStart, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const apiResponse = await fetch(
      'api.coincap.io/v2/assets',
      {
        method,
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      },
    )
      .then((res) => res)
      .then((data) => console.log(data.body));
    dispatch(apiRequestSucceed(apiResponse));
    if (onSuccess) dispatch({ type: onSuccess, payload: apiResponse });
  } catch (error) {
    dispatch(apiRequestFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default apiCalls;
