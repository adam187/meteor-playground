import { Tasks } from '../imports/collection/tasks';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('getPublicTasks', function tasksPublication() {
    return Tasks.find({public: true});
  });

  // Meteor.publish('getPrivateTasks', function tasksPublication() {
  //   return Tasks.find({private: true});
  // });
}
