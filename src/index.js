import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { storeConfiguration, ConnectedApp } from './redux/redux.store';
import { BrowserRouter, Route } from 'react-router-dom'

const store = storeConfiguration();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={ConnectedApp}/>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
