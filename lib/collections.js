import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');
export const Logs = new Mongo.Collection('logs');
