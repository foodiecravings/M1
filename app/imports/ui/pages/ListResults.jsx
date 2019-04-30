import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import FoodResultItem from '../components/FoodResultItem';

/** Renders a table containing all of the Food documents. Use <FoodItem> to render each row. */
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
        <Table.Row>
          {this.props.location.state.referrer.map((food, index) => <FoodResultItem key={index} food={food} />)}
        </Table.Row>
      </Container>
  );
}
}

/** Require an array of Food documents in the props. */
ListResults.propTypes = {
  location: PropTypes.object.isRequired,
  foods: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Foods documents.
  const subscription = Meteor.subscribe('Food');
  return {
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListResults);
