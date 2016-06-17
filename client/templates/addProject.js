import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Projects } from '../../lib/collections';

import './addProject.html';

Template.addCard.onRendered(function () {
  this.findAll('.modal-trigger').forEach(function(el){
    $(el).leanModal();
  });
});

Template.addCard.events({
  'submit .new-project' (event) {
    event.preventDefault();
    const project = {
      name: event.target.project_name.value,
      hours: parseInt(event.target.project_hours.value),
      month: Session.get('actualMonth')
    };
    Meteor.call('addProject', project);
    $('#add-card-modal').closeModal();
    event.target.project_name.value = '';
    event.target.project_hours.value = '';
  }
});