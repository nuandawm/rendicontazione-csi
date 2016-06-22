import { Template } from 'meteor/templating';
import { Projects } from '../../../lib/collections';
import { Session } from 'meteor/session';

Template.employeeProjectList.helpers({
  projects () {
    return Projects.find({userId: this._id});
  },
  totalHours () {
    var totalHours = 0;
    Projects.find({userId: this._id}).forEach(function(element){
      totalHours += element.hours;
    });
    return totalHours;
  }
});

Template.employeeProjectList.events({
  'click .unselectEmployee' () {
    Session.set('selectedEmployee', null);
  }
});