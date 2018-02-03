import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/redux.store';
import { BrowserRouter, Route } from 'react-router-dom'




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));
