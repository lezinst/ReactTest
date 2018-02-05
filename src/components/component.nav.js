import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/basic-actions'

export class Nav extends React.Component {

  componentDidMount(){
    console.log('nav', this.props)
  }

  render(){
    let navigation = (
      <div className="wrapper">
        <nav class="sidebar-nav">
          <ul>
            <li className="active" onClick={this.props.actions.ChooseFirstOption}><Link to='/'>First</Link></li>
            <li onClick={this.props.actions.ChooseSecondOption}><Link to='/second'>Second</Link></li>
            <li onClick={this.props.actions.ChooseThirdOption}><Link to='/third'>Third</Link></li>
          </ul>
        </nav>
      </div>
    )


    return <div>{navigation}</div>


  }
}
