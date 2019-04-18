import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import FoodItem from '../components/FoodItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListResults extends React.Component {

/** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
render()
{
  return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
}

/** Render the page once subscriptions have been received. */
renderPage()
{
  return (
      <Container>
        <Header as="h2" textAlign="center">Search Results</Header>
        <Table.Row>
          {this.props.results.map((results, index) => <FoodItem key={index} result={results} />)}
        </Table.Row>
      </Container>
  );
}
}

/** Require an array of Food documents in the props. */
ListResults.propTypes = {
  results: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Foods documents.
  const subscription = Meteor.subscribe('Foods');
  return {
    results: Foods.find({}).fetch(),
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListResults);
