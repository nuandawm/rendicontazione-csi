import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Projects } from '../../lib/collections';

import './addHours.html';
import './subtractHours.html';

Template.addHours.events({
  'submit .add-hours' (event) {
    event.preventDefault();
    var currentProject = Session.get('currentProject');
    var hours = parseInt(event.target.hours_more.value);
    if (isNaN(hours))
      hours = 0;
    Projects.update(currentProject._id, {$inc: {hours: hours}});
    $('#add-hours-modal').closeModal();
    $('#hours_more').val('');
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
    Projects.update(currentProject._id, {$inc: {hours: - hours}});
    $('#subtract-hours-modal').closeModal();
    $('#hours_less').val('');
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