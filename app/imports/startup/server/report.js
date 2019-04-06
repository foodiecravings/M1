import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Reports } from '../../api/report/report.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.description})`);
  Reports.insert(data);
}

/** Initialize the collection if empty. */
if (Reports.find().count() === 0) {
  if (Meteor.settings.defaultReports) {
    console.log('Creating default data.');
    Meteor.settings.defaultReports.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ReportAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Reports.find();
  }
  return this.ready();
});
