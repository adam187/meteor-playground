import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fetchTasks } from '../imports/ui/actions';

import App from '../imports/ui/App.jsx';

import store from '../imports/ui/store';

import { Tasks } from '../imports/api/tasks';

// console.log('main', App, store);
//
const handle = Meteor.subscribe('tasks', {
  onReady: function () {
    console.log('tasks@ready', handle.ready());
    store.dispatch(fetchTasks());
  },
});

//
// console.log(handle, handle.ready());

store.dispatch(fetchTasks());

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('render-target')
  );
});
