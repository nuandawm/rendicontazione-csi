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
    Projects.remove(this._id);
  },
  'click .addHours' (event, template) {
    Session.set('currentProject', template.data);
  }
});