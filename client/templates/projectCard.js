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
  'submit .add-hours' (event) {
    event.preventDefault();
    console.log(this._id);
    $('#add-hours-modal').closeModal();
    //Projects.update(this._id, {$inc: {hours: parseInt(event.target.hours_more.value)}});
  }
});