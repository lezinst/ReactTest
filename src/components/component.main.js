import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { First } from './component.first';
import { Second } from './component.second';
import { Third } from './component.third';

export function Main (props){

  return (
    <Switch>
      <Route exact path='/' component={First}/>
      <Route path='/second' component={Second}/>
      <Route path='/third' component={Third}/>
    </Switch>
  )
}
