import { LS_KEY_FUNDS } from './localStorageKeys';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LS_KEY_FUNDS);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LS_KEY_FUNDS, serializedState);
  } catch {

  }
};

