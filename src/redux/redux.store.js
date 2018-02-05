import {createStore, applyMiddleware} from 'redux';
import NavReducer from '../reducers/reducer.nav.js';
import thunk from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../App'
import * as actions from '../actions/basic-actions'


export const storeConfiguration = () => {
  //redux works asych so thunk allows us to work with it synch
  return createStore(
    NavReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

function mapStateToProps(state) {
  return {
    navChoice: state.navChoice
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
