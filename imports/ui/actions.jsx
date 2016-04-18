// import { Tasks } from '../collection/tasks';

export const ADD_TASK = 'ADD_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
// export const UPDATE_TASKS = 'UPDATE_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const REFRESH_TASK = 'REFRESH_TASK';

export function createTask(task) {
  if (typeof task === 'string') {
    task = { text: task };
  }

  return function (dispatch) {
    Meteor.call('createTask', task, (error, result) => {
      console.log('createTask', error, result);
      // dispatch(fetchTasks());
    });
    // Tasks.insert(task, () => {
    //   dispatch(fetchTasks());
    // });
  };
}

export function addTask(task) {
  return { type: ADD_TASK, task };
}

export function refreshTask(task) {
  return { type: REFRESH_TASK, task };
}

export function fetchTasks() {
  return { type: FETCH_TASKS };
}

// export function updateTasks(tasks) {
//   return { type: UPDATE_TASKS, tasks };
// }

export function updateTask(task) {
  console.log('updateTask action');
  // return { type: UPDATE_TASK, task };

  return function (dispatch) {
    console.log('obj', dispatch);
    Meteor.call('updateTask', task, () => {
      // dispatch(fetchTasks());
    });
  };
}

export function deleteTask(task) {
  console.log('deleteTask', task);

  Meteor.call('deleteTask', {_id: task._id} );
}
