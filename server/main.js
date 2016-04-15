import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks';

console.log('main');

Meteor.startup(() => {
  console.log('Meteor.startup');
  // code to run on server at startup
});
