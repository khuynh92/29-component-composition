import React, { Component } from 'react';

import './Landing.scss';

export default class Landing extends Component {
  render() {
    return (
      <header>
        <h1>To Do App</h1>
        <p>This Application is a to do list</p>
        <p>Go to Dashboard to begin adding items</p>
      </header>
    );
  }
}