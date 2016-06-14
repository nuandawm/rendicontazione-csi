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
    var target = event.target;
    Projects.insert({name: target.project_name.value, hours: parseInt(target.project_hours.value)});
    $('#add-card-modal').closeModal();
    target.project_name.value = '';
    target.project_hours.value = '';
  }
});