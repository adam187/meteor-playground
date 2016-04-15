import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

console.log('Meteor.isServer', Meteor.isServer);

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find();
  });
}

Meteor.methods({
  'tasks.insert': (text) => {
    check(text, String);

    Tasks.insert({
      text,
    });
  },
});
