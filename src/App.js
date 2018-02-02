import React, { Component } from 'react';
import './App.css';
import { Nav } from './components/component.nav'
import { Horizontal } from './components/component.horiz'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Horizontal></Horizontal>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
