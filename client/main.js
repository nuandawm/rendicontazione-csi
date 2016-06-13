import { Template } from 'meteor/templating';

import './main.html';

Template.body.onRendered(function(){
  Session.set('currentProject', {});
});