import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { First } from './component.first';
import { Second } from './component.second';
import { Third } from './component.third';

export function Main (props){

  return (
    <div class="content no-padding h-100">
      <Switch>
        <Route exact path='/' component={First}/>
        <Route path='/second' component={Second}/>
        <Route path='/third' component={Third}/>
      </Switch>
    </div>
  )
  
}
