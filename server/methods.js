import { Tasks } from '../imports/collection/tasks';

Meteor.methods({
  createTask(task) {
    // throw new Meteor.Error('pants-not-found', 'Can\'t find my pants');

    task.public = true;

    const tasks = Tasks.insert(task);
    return tasks;
  },

  deleteTask(task) {
    console.log('deleteTask', task);

    Tasks.remove(task._id);
  },

  updateTask(task) {
    console.log('updateTask', task);

    const tasks = Tasks.update(task._id, {$set: {text: task.text}});
    return tasks;
  },

});
