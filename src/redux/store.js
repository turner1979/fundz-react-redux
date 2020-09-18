import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools()
);

store.subscribe(() => {
  saveState({ funds: store.getState().funds })
})

export default store;
