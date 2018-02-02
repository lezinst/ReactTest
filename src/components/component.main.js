import React, { Component } from 'react';

export function Main (props){

  return (
    <div className="row">{props.inView || 'Clock'}</div>
  )
}
