import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

import './main.html';

Template.body.onRendered(function(){
  Session.set('currentProject', {});
  Session.set('backupProject', null);
  Session.set('selectedEmployee', null);

  var actualMonth = new Date();
  actualMonth = new Date(actualMonth.getFullYear(), actualMonth.getMonth());
  Session.set('actualMonth', actualMonth);
});

Meteor.subscribe('myProjects');
Meteor.subscribe('allUsers');

moment.locale('it', {
  months: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']
});