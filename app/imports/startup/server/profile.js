import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Profiles } from '../../api/profile/profile.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.firstname} (${data.owner})`);
  Profiles.insert(data);
}

/** Initialize the collection if empty. */
if (Profiles.find().count() === 0) {
  if (Meteor.settings.defaultProfile) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfile.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Profile', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Profiles.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('ProfileAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.find();
  }
  return this.ready();
});
