import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Projects } from '../../lib/collections';
import { _ } from 'meteor/underscore';

import './projectCards.html';

Template.projectCards.helpers({
  projects () {
    var actualMonth = Session.get('actualMonth');
    var whereClause = {};
    if (actualMonth)
      whereClause = {$where: function(){
        return this.month.getFullYear()+this.month.getMonth() === actualMonth.getFullYear()+actualMonth.getMonth();
      }};
    return Projects.find(whereClause);
  },
  totalHours () {
    return Session.get('totalHours');
  },
  actualMonth () {
    return moment(Session.get('actualMonth')).format('MMMM YYYY');
  },
  months () {
    return Session.get('months');
  },
  selectedActualMonth (monthDate) {
    return (moment(Session.get('actualMonth')).format('MM/YYYY') === moment(monthDate).format('MM/YYYY')) ?
      'selected' : '';
  }
});

Template.projectCards.onCreated(() => {
  Tracker.autorun(() => {
    var actualMonth = Session.get('actualMonth');
    var whereClause = {};
    if (actualMonth)
      whereClause = {$where: function(){
        return this.month.getFullYear()+this.month.getMonth() === actualMonth.getFullYear()+actualMonth.getMonth();
      }};
    var totalHours = 0;
    Projects.find(whereClause).forEach((project) => {
      totalHours += project.hours;
    });

    Session.set('totalHours', totalHours);
  });

  Tracker.autorun(() => {
    var months = _.uniq(Projects.find().fetch().map(function(project){
      return (project.month) ? project.month : new Date();
    }), function(date){
      return ''+date.getFullYear()+date.getMonth();
    }).map(function(month){
      return {
        jsDate: month,
        displayDate: moment(month).format('MMMM YYYY')
      };
    });

    Session.set('months', months);
  });
});

Template.projectCards.onRendered(function () {
  this.findAll('.modal-trigger').forEach(function(el){
    $(el).leanModal();
  });
});

Template.projectCards.events({
  'change .select_month' (event) {
    var months = Session.get('months');
    var selectedMonthIndex = event.target.value;
    Session.set('actualMonth', months[selectedMonthIndex].jsDate);
  }
});