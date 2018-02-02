import React, { Component } from 'react';
import './App.css';
import { Nav } from './components/component.nav';
import { Horizontal } from './components/component.horiz';
import { Main } from './components/component.main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Horizontal></Horizontal>
        <Main></Main>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
