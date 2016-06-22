import { Template } from 'meteor/templating';

Template.userCard.helpers({
  userIsProjectManager () {
    return Roles.userIsInRole(this._id, 'projectManager');
  }
});

Template.userCard.events({
  'click .unmakePM' (event, template) {
    Meteor.call('unmakePM', template.data._id);
  },
  'click .makePM' (event, template) {
    Meteor.call('makePM', template.data._id);
  }
});