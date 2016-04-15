import { combineReducers } from 'redux';
import { ADD_TASK, UPDATE_TASKS, FETCH_TASKS } from './actions';

import { Tasks } from '../api/tasks';

// const initialState = Tasks.find({}).fetch();

const initialState = [];

// [
//   { _id: 1, text: 'This is task 1' },
//   { _id: 2, text: 'This is task 2' },
//   { _id: 3, text: 'This is task 3' },
// ];

// console.log('initialState', initialState);

function getMaxOfArray(numArray) {
  if (!numArray) {
    return 0;
  }

  return Math.max.apply(null, numArray);
}

function getNextId(state) {
  return getMaxOfArray(state.map(task => task._id)) + 1;
}

function tasks(state, action) {
  console.log('tasks', state, action.type);

  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case FETCH_TASKS:
      return Tasks.find({}).fetch();
    case UPDATE_TASKS:
      return action.tasks;
    // case ADD_TASK:
    //   // Tasks.insert({ text: action.task.text }, () => {
    //   //   console.log('inserted');
    //   // });
    //
    //   return state;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  tasks,
});

export default todoApp;
