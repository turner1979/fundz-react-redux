import { OPEN_FUND_MODAL, CLOSE_FUND_MODAL } from "./fundModalTypes";

const initialState = {
  showModal: false
}
export const fundModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_FUND_MODAL: return {
      ...state,
      showModal: true
    };
    case CLOSE_FUND_MODAL: return {
      ...state,
      showModal: false
    }
    default: return state;
  }
}
