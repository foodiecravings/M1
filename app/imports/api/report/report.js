import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Report = new Mongo.Collection('Report');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ReportSchema = new SimpleSchema({
  name: String,
  description: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Report.attachSchema(ReportSchema);

/** Make the collection and schema available to other code. */
export { Report, ReportSchema };
