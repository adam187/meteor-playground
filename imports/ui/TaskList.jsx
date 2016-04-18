// import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task.jsx';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(todo =>
      <Task key={todo._id} task={todo} />
    )}
  </ul>
);

const mapStateToProps = (state) => {
  // console.log('mapStateToProps@TaskList', state);
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(TaskList);
