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
  },
  actualMonth () {
    return moment(Session.get('actualMonth')).format('MMMM YYYY');
  },
  months () {
    return _.uniq(Projects.find().fetch().map(function(project){
      return (project.month) ? project.month : new Date();
    }), function(date){
      return ''+date.getFullYear()+date.getMonth();
    }).map(function(month){
      return moment(month).format('MMMM YYYY');
    });
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