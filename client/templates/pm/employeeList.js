import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';

Template.employeeList.helpers({
  employees () {
    return Meteor.users.find();
  },
  isMe (userId) {
    return Meteor.userId() === userId;
  }
});

Template.employeeList.onRendered(function(){
  this.findAll('.dropdown-button').forEach(function(el){
    $(el).dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });
  });
});