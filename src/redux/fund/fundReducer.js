import { ADD_FUND, DELETE_FUND, UPDATE_FUND } from './fundTypes';

const initialState = {
  funds: []
}

export const fundReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FUND: return {
      ...state,
      funds: [...state.funds, action.payload]
    }
    case DELETE_FUND:
      return {
        ...state,
        funds: state.funds.filter((fund) => fund.id !== action.payload.id )
      }
    case UPDATE_FUND: return state; // TODO: update
    default: return state;
  }
}