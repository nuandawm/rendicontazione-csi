import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.methods({
    'getMyProjects' () {
      var myProjects = Projects.find({userId: this.userId}).map(function(p){ return p; });
      return myProjects;
    }
  });
});
