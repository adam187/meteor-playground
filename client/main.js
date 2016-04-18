import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fetchTasks } from '../imports/ui/actions';

import App from '../imports/ui/App.jsx';

import store from '../imports/ui/store';

import { Tasks } from '../imports/collection/tasks';

import { startObserve, initTasksLoaded } from '../imports/api/observe';

import { Tracker } from 'meteor/tracker';

Tracker.autorun(() => {
  console.log('Tracker.autorun');
  startObserve();
});

// console.log('main', App, store);
//
// const handle = Meteor.subscribe('getPrivateTasks', {
//   onReady: function () {
//     console.log('privateTasks@ready', handle.ready());
//     // store.dispatch(fetchTasks());
//     loaded();
//   },
// });

const handle2 = Meteor.subscribe('getPublicTasks', {
  onReady: function () {
    console.log('publicTasks@ready', handle2.ready());
    store.dispatch(fetchTasks());
    initTasksLoaded();
  },
});

//
// console.log(handle, handle.ready());

// store.dispatch(fetchTasks());

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('render-target')
  );
});
