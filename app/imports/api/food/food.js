import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Foods = new Mongo.Collection('Foods');

/** Create a schema to constrain the structure of documents associated with this collection. */
const FoodSchema = new SimpleSchema({
      name: String,
      title: String,
      image: String,
      restaurant: String,
      price: {
        type: String,
        allowedValues: ['$0-$8', '$9-$15', '$16-$25', '$26++'],
        defaultValue: '$0-$8',
      },
      rating: {
        type: String,
        allowedValues: ['1/5', '2/5', '3/5', '4/5', '5/5'],
        defaultValue: '3/5',
      },
      location: {
        type: String,
        allowedValues: ['Paradise Palms', 'Cafeteria', 'Off-Location'],
        defaultValue: 'Paradise Palms',
      },
      owner: String,
    },
    {
      tracker: Tracker,
    });

/** Attach this schema to the collection. */
Foods.attachSchema(FoodSchema);

/** Make the collection and schema available to other code. */
export { Foods, FoodSchema };
