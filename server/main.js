import { Meteor } from 'meteor/meteor';

import '../imports/collection/tasks';
import './methods';
import './publications';

console.log('main');

Meteor.startup(() => {
  console.log('Meteor.startup');
  // code to run on server at startup
});
