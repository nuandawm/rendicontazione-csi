import { Template } from 'meteor/templating';

Template.userList.helpers({
  allUsers () {
    return Meteor.users.find();
  },
  isMe (userId) {
    return Meteor.userId() === userId;
  }
});