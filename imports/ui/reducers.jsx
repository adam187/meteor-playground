import { combineReducers } from 'redux';
import { ADD_TASK, UPDATE_TASKS, FETCH_TASKS, REFRESH_TASK } from './actions';

// import { Tasks } from '../api/tasks';
import { cursor } from '../api/cursor';

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

    case ADD_TASK:
      return [...state, action.task];

    case REFRESH_TASK:
      let oldTask = state.filter((item) => item._id === action.task._id)[0]
      let idx = state.indexOf(oldTask);
      console.error('task refreshed', idx, typeof state, state);
      let newState = [
        ...state.slice(0, idx),
        action.task,
        ...state.slice(idx + 1),
      ];
      return newState;

    case FETCH_TASKS:
      const state = cursor.fetch();

      // tasks.map((task) => {
      //   task.text += 'Piort';
      // });

      return state;
    // case UPDATE_TASKS:
    //   return action.tasks;
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
