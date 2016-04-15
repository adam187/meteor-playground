import React, { Component, PropTypes } from 'react';
import { addTask } from './actions';
import store from './store';

// Task component - represents a single todo item
export default class AddTask extends Component {
  add() {
    store.dispatch(addTask('new task'));
  }

  render() {
    return (
      <button onClick={this.add}>Add</button>
    );
  }
}
