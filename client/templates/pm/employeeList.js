import { Template } from 'meteor/templating';

Template.employeeList.helpers({
  employees () {
    return Meteor.users.find();
  },
  isMe (userId) {
    return Meteor.userId() === userId;
  }
});