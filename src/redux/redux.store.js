import {createStore, applyMiddleware} from 'redux';
import NavReducer from '../reducers/reducer.nav.js';
import thunk from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../actions/basic-actions';

export const storeConfiguration = () => {
  //don't use thunk at the moment, but it's easy to drop it in when I need it later
  return createStore(
    NavReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
}

function mapStateToProps(state) {
  return {
    navChoice: state.navChoice
  }
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
