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
      <div className="container-fluid">
        <Horizontal status={this.props.navChoice}></Horizontal>
        <Nav actions={this.props.actions}></Nav>
        <Main></Main>
      </div>
    );
  }
}

export default App;
