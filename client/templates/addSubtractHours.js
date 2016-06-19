import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './addHours.html';
import './subtractHours.html';

Template.addHours.events({
  'submit .add-hours' (event) {
    event.preventDefault();
    var currentProject = Session.get('currentProject');
    var hours = parseInt(event.target.hours_more.value);
    if (isNaN(hours))
      hours = 0;
    Meteor.call('addHours', currentProject._id, hours);
    $('#add-hours-modal').closeModal();
    event.target.hours_more.value = '';
  }
});

Template.subtractHours.events({
  'submit .subtract-hours' (event) {
    event.preventDefault();
    var currentProject = Session.get('currentProject');
    var hours = parseInt(event.target.hours_less.value);
    if (isNaN(hours))
      hours = 0;
    else if (currentProject.hours - hours < 0)
      hours = currentProject.hours;
    Meteor.call('subtractHours', currentProject._id, hours);
    $('#subtract-hours-modal').closeModal();
    event.target.hours_less.value = '';
  }
});

Template.addHours.helpers({
  currentProject () {
    return Session.get('currentProject');
  }
});

Template.subtractHours.helpers({
  currentProject () {
    return Session.get('currentProject');
  }
});