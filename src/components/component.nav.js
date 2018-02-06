import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/basic-actions';

export class Nav extends React.Component {

  render(){
    let navigation = (
        <nav>
          <ul>
            <li className="active" onClick={this.props.actions.ChooseFirstOption}><Link to='/'>First</Link></li>
            <li onClick={this.props.actions.ChooseSecondOption}><Link to='/second'>Second</Link></li>
            <li onClick={this.props.actions.ChooseThirdOption}><Link to='/third'>Third</Link></li>
          </ul>
        </nav>
    )

    return <div class="col navigation">{navigation}</div>

  }
}
