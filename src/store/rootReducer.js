import { combineReducers } from 'redux';
import coins from './slices/coins-dux';

const rootReducer = combineReducers({
  coins,
});

export default rootReducer;
