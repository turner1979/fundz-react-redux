import { combineReducers } from 'redux';
import { fundReducer } from './fund/fundReducer';
import { fundModalReducer } from './fundModal/fundModalReducer';

const rootReducer = combineReducers({
  funds: fundReducer,
  fundModal: fundModalReducer
})

export default rootReducer;