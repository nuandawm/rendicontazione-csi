import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Projects } from '../../lib/collections';

import './backupProject.html';

Template.backupProject.helpers({
  backupProject () {
    return Session.get('backupProject');
  }
});

Template.backupProject.events({
  'click .undo' () {
    Projects.insert(Session.get('backupProject'));
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