import React, { Component } from 'react';
import { First } from './component.first';
import { Second } from './component.second';
import { Third } from './component.third';

export class Nav extends React.Component {

  render(){
    return(
      <div>
        <First></First>
        <Second></Second>
        <Third></Third>
      </div>
    )

  }
}
