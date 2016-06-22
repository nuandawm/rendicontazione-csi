import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections';

Meteor.publish('myProjects', function () {
  if (Roles.userIsInRole(this.userId, 'projectManager'))
    return Projects.find();
  else
    return Projects.find({userId: this.userId});
});

Meteor.publish('allUsers', function () {
  if (Roles.userIsInRole(this.userId, 'admin'))
    return Meteor.users.find({
      $or: [
        {roles: 'projectManager'},
        {roles: 'employee'}
      ]
    }, {
      fields: {
        _id: 1,
        username: 1,
        roles: 1
      }
    });
  else
    return Meteor.users.find({
      $or: [
        {roles: 'employee'}
      ]
    }, {
      fields: {
        _id: 1,
        username: 1,
        roles: 1
      }
    });
});