import { Tasks } from '../api/tasks';

export const ADD_TASK = 'ADD_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
export const UPDATE_TASKS = 'UPDATE_TASKS';
export const CREATE_TASK = 'CREATE_TASK';

export function addTask(task) {
  if (typeof task === 'string') {
    task = { text: task };
  }

  return function (dispatch) {
    Tasks.insert(task, () => {
      dispatch(fetchTasks());
    });
  };
}

export function fetchTasks() {
  return { type: FETCH_TASKS };
}

export function updateTasks(tasks) {
  return { type: UPDATE_TASKS, tasks };
}
