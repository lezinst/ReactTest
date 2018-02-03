import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {

  constructor(props){
    super()
  }

  render(){
    let navigation = (
      <div className="nav">
        <nav>
          <ul>
            <li><Link to='/'>First</Link></li>
            <li><Link to='/second'>Second</Link></li>
            <li><Link to='/third'>Third</Link></li>
          </ul>
        </nav>
      </div>
    )


    return <div>{navigation}</div>


  }
}
