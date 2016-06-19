import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { _ } from 'meteor/underscore';

Template.addMonth.events({
  'submit .add-month' () {
    event.preventDefault();
    var months = Session.get('months');
    var monthToAdd = event.target.month_to_add.value;
    monthToAdd = moment(monthToAdd, 'MM/YYYY');
    if (monthToAdd.isValid){
      monthToAdd = {
        jsDate: monthToAdd.toDate(),
        displayDate: monthToAdd.format('MMMM YYYY')
      };
      months.push(monthToAdd);
      months = _.uniq(months, function(month){
        return ''+month.jsDate.getFullYear()+month.jsDate.getMonth();
      });
      months = _.sortBy(months, 'jsDate');
      Session.set('months', months);
      Session.set('actualMonth', monthToAdd.jsDate);
    }
    
    $('#add-month-modal').closeModal();
    event.target.month_to_add.value = '';
  }
});
