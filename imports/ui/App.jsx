import React, { Component } from 'react';

import Task from './Task.jsx';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';
import store from './store';

// App component - represents the whole app
export default class App extends Component {
  // getTasks() {
  //   var tasks = store.getState().tasks;
  //   console.log('getTasks', tasks);
  //
  //   return tasks;
  // }

  // renderTasks() {
  //   console.log('renderTasks');
  //   return this.getTasks().map((task) => (
  //     <Task key={task._id} task={task} />
  //   ));
  // }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <TaskList />
        <AddTask />
      </div>
    );
  }
}
