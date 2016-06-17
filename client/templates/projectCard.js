import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Projects } from '../../lib/collections';

import './projectCard.html';

Template.projectCard.onRendered(function () {
  this.findAll('.modal-trigger').forEach(function(el){
    $(el).leanModal();
  });
});

Template.projectCard.helpers({
  'percentage' () {
    return this.hours / Session.get('totalHours') * 100;
  }
});

Template.projectCard.events({
  'click .close' () {
    Session.set('backupProject', Projects.findOne(this._id));
    Meteor.call('removeProject', this._id);
  },
  'click .addHours' (event, template) {
    Session.set('currentProject', template.data);
  },
  'click .subtractHours' (event, template) {
    Session.set('currentProject', template.data);
  }
});