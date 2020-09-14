import { ADD_FUND, DELETE_FUND, UPDATE_FUND } from './fundTypes';

const initialState = {
  funds: []
}

export const fundReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FUND: return state; // TODO: add
    case DELETE_FUND: return state; // TODO delete
    case UPDATE_FUND: return state; // TODO: update
    default: return state;
  }
}