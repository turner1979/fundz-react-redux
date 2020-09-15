import { OPEN_FUND_MODAL, CLOSE_FUND_MODAL } from './fundModalTypes';

export const openFundModal = () => {
  return {
    type: OPEN_FUND_MODAL
  }
}

export const closeFundModal = () => {
  return {
    type: CLOSE_FUND_MODAL
  }
}
