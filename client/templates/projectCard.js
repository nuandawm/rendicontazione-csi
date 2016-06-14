import { Template } from 'meteor/templating';
import { Projects } from '../../lib/collections';

import './projectCard.html';

Template.projectCard.onRendered(function () {
  this.findAll('.modal-trigger').forEach(function(el){
    $(el).leanModal();
  });
});

Template.projectCard.events({
  'click .close' () {
    Session.set('backupProject', Projects.findOne(this._id));
    Projects.remove(this._id);
  },
  'click .addHours' (event, template) {
    Session.set('currentProject', template.data);
  },
  'click .subtractHours' (event, template) {
    Session.set('currentProject', template.data);
  }
});