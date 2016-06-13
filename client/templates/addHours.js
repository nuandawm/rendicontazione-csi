import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Projects } from '../../lib/collections';

import './addHours.html';

Template.addHours.events({
  'submit .add-hours' (event) {
    event.preventDefault();
    var currentProject = Session.get('currentProject');
    Projects.update(currentProject._id, {$inc: {hours: parseInt(event.target.hours_more.value)}});
    $('#add-hours-modal').closeModal();
    $('#hours_more').val('');
  }
});

Template.addHours.helpers({
  currentProject () {
    return Session.get('currentProject');
  }
});