/* eslint max-len: ["error", { "code": 190 }] */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import FoodResultItem from '../components/FoodResultItem';
import { Notes } from '/imports/api/note/note';


/** Renders a table containing all of the Food documents. Use <StuffItem> to render each row. */
class ListResults extends React.Component {

/** If the subscription(s) have been received, render the page, otherwise show a loading icon. */

render() {
  return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
}

/** Render the page once subscriptions have been received. */
renderPage() {
  return (
      <Container>
        <Header as="h2" textAlign="center">Search Results</Header>
        <Card.Group>
          {this.props.location.state.referrer.map((food, index) => <FoodResultItem key={index} food={food} notes={this.props.notes.filter(note => (note.foodId === food._id))}/>)} />)}
        </Card.Group>
      </Container>
  );
}
}

/** Require an array of Food documents in the props. */
ListResults.propTypes = {
  location: PropTypes.object.isRequired,
  foods: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Foods documents.
  const subscription = Meteor.subscribe('Food');
  const subscription2 = Meteor.subscribe('Notes');

  return {
    foods: Foods.find({}).fetch(),
    notes: Notes.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(ListResults);
