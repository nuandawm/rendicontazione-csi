import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections';

Meteor.publish('myProjects', function () {
  return Projects.find({userId: this.userId});
});