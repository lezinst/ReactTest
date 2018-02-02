import {createStore, applyMiddleware} from 'redux';
import NavReducer from '../reducers/reducer.nav.js';
import thunk from 'redux-thunk';



  const storeConfiguration = () => {
  //redux works asych so thunk allows us to work with it synch
  return createStore(
    NavReducer,
    applyMiddleware(thunk)
  );
}

export const store = storeConfiguration();
