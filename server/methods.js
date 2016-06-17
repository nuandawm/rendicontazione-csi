import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Projects } from '../lib/collections';
import { ActionLogger } from './loggers';

const logger = new ActionLogger();

Meteor.methods({
  'addProject' (project) {
    _.extend(project, {userId: Meteor.userId()});
    Projects.insert(project);
    logger.log('Project added', project);
  },
  'removeProject' (projectId) {
    var thisProject = Projects.findOne({_id: projectId, userId: Meteor.userId()});
    if (thisProject) {
      Projects.remove(projectId);
      logger.log('Project removed', thisProject);
    }
    else
      logger.error('Error removing project '+projectId);
  },
  'addHours' (projectId, hours) {
    var thisProject = Projects.findOne({_id: projectId, userId: Meteor.userId()});
    if (thisProject) {
      Projects.update(projectId, {$inc: {hours: hours}});
      logger.log('Added '+hours+' hours to project', thisProject);
    }
    else
      logger.error('Error adding hours to project '+projectId);
  },
  'subtractHours' (projectId, hours) {
    var thisProject = Projects.findOne({_id: projectId, userId: Meteor.userId()});
    if (thisProject) {
      Projects.update(projectId, {$inc: {hours: - hours}});
      logger.log('Subtracted '+hours+' hours to project', thisProject);
    }
    else
      logger.error('Error subtracting hours to project '+projectId);
  }
});
