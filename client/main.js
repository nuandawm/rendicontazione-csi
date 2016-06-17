import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Template } from 'meteor/templating';

import './main.html';

Template.body.onRendered(function(){
  Session.set('currentProject', {});

  Session.set('backupProject', null);
});

Meteor.subscribe('myProjects');