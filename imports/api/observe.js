
import store from '../ui/store';
import { addTask, refreshTask, fetchTasks } from '../ui/actions';
import { cursor } from './cursor';

var handleAdded = false;

export function initTasksLoaded() {
  handleAdded = true;
}

export function startObserve() {
  cursor.observe({
    added: (task) => {
      if (!handleAdded) {
        return;
      }

      console.warn('added', task);
      store.dispatch(addTask(task));

      // store.dispatch(fetchTasks());

    },

    // addedAt: (document, atIndex, before) => {
    //   console.warn('addedAt', document, atIndex, before);
    // },
    changed: (task, oldDocument) => {
      // console.warn('changed', newDocument, oldDocument);
      store.dispatch(refreshTask(task));
    },

    // changedAt: (test, test2) => {
    //   console.warn('changedAt', test, test2);
    // },

    removed: (task) => {
      console.warn('removed', task);
      store.dispatch(fetchTasks());
    },
  });
}

console.log('observe');

export default cursor;
