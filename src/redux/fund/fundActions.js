import { ADD_FUND, DELETE_FUND, UPDATE_FUND } from './fundTypes';

export const addFund = () => {
  return {
    type: ADD_FUND
  }
}

export const updateFund = () => {
  return {
    type: UPDATE_FUND
  }
}

export const deleteFund = () => {
  return {
    type: DELETE_FUND
  }
}