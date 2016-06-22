import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.employeeCard.events({
  'click .viewProjects' (event, template) {
    Session.set('selectedEmployee', template.data);
  }
});