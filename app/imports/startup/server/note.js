import { Meteor } from 'meteor/meteor';
import { Notes } from '../../api/note/note.js';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Notes', function publish() {
  if (this.userId) {
    return Notes.find();
  }
  return this.ready();
});
