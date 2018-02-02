import React, { Component } from 'react';

export function Horizontal (props){

  return (
    <div className="row">{props.Horizontal || 'name'}</div>
  )
}
