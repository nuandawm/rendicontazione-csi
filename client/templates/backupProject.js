import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './backupProject.html';

Template.backupProject.helpers({
  backupProject () {
    return Session.get('backupProject');
  }
});

Template.backupProject.events({
  'click .undo' () {
    Meteor.call('addProject', Session.get('backupProject'));
    Session.set('backupProject', null);
  },
  'click .close' () {
    Session.set('backupProject', null);
  }
});

/*Template.backupProject.animations({
  '.undo-panel': {
    container: '.undo-container',
    insert: {
      class: 'fade-in'
    },
    remove: {
      class: 'fade-out'
    }
  }
});*/