import { Meteor } from 'meteor/meteor';
import { Logs } from '../lib/collections';

export var ActionLogger = function () {

};

ActionLogger.levels = {
  LOG: 'log',
  ERROR: 'error'
};

ActionLogger.prototype.log = function(action, object){
  insertLog(action, object, ActionLogger.levels.LOG);
};

ActionLogger.prototype.error = function(action, object){
  insertLog(action, object, ActionLogger.levels.ERROR);
};

var insertLog = function (action, object, level) {
  var log = {
    level: level,
    userId: Meteor.userId(),
    action: action,
    date: new Date(),
    object: (object ? object : null)
  };
  Logs.insert(log);
};