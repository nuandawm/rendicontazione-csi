import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.projectManagerPanel.helpers({
  selectedEmployee () {
    return Session.get('selectedEmployee');
  }
});