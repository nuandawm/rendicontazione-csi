import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Projects } from '../../lib/collections';

import './projectCards.html';

Template.projectCards.helpers({
  projects () {
    return Projects.find();
  },
  totalHours () {
    return Session.get('totalHours');
  }
});

Template.projectCards.onCreated(() => {
  Tracker.autorun(() => {
    var totalHours = 0;
    Projects.find().forEach((project) => {
      totalHours += project.hours;
    });
    Session.set('totalHours', totalHours);
  });
});