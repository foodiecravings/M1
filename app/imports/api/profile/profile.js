import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Profiles = new Mongo.Collection('Profiles');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ProfilesSchema = new SimpleSchema({
  firstname: String,
  lastname: String,
  bio: String,
  photo: String,
  standing: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profiles.attachSchema(ProfilesSchema);

/** Make the collection and schema available to other code. */
export { Profiles, ProfilesSchema };
