import { combineReducers } from 'redux';
import { fundReducer } from './fund/fundReducer';

const rootReducer = combineReducers({
  funds: fundReducer
})

export default rootReducer;