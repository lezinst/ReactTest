import React, { Component } from 'react';
import './App.css';
import { Nav } from './components/component.nav';
import { Horizontal } from './components/component.horiz';
import { Main } from './components/component.main';

class App extends React.Component {

  componentDidMount(){
    console.log('app props', this.props);
  }

  render() {
    return (
      <div class="container-fluid h-100">
        <div class="d-flex h-100">
          <Nav actions={this.props.actions}></Nav>
          <div class="d-flex col flex-column no-padding">
            <Horizontal  status={this.props.navChoice}></Horizontal>
            <Main></Main>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
