import { Template } from 'meteor/templating';
import { Projects } from '../../lib/collections';
import { _ } from 'meteor/underscore';

import './projectCards.html';

var getTotalHours = function(){
  var projects = Projects.find();
  var totalHours = 0;
  projects.forEach(function(project){
    totalHours += project.hours;
  });

  return totalHours;
};

Template.projectCards.helpers({
  projects () {
    var projects = Projects.find();
    var returnProjects = [];
    var totalHours = getTotalHours();

    projects.forEach(function(project, i) {
      project = _.extend(project, {percentage: 100 * project.hours / totalHours});

      // Building a matrix starting from an array
      var posX = Math.floor(i/3);
      var posY = i%3;
      if (typeof returnProjects[posX] === 'undefined')
        returnProjects.push([]);
      returnProjects[posX][posY] = project;
    });

    return returnProjects;
  },
  totalHours () {
    return getTotalHours();
  },
  removeProject (projectID) {
    Projects.remove(projectID);
  }
});