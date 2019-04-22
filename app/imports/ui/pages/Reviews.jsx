import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import FoodItem from '/imports/ui/components/FoodItem';
import { Profiles } from '/imports/api/profile/profile';
import ProfileItem from '/imports/ui/components/ProfileItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Food documents. Use <FoodItem> to render each row. */
class Reviews extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Profile</Header>
          {this.props.profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />)}
          <Header as="h2" textAlign="center">Reviews</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Food</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Cost</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Edit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.foods.map((food) => <FoodItem key={food._id} food={food} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Food documents in the props. */
Reviews.propTypes = {
  foods: PropTypes.array.isRequired,
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Food and Profile documents.
  const subscription = Meteor.subscribe('Food');
  const subscription2 = Meteor.subscribe('Profiles');
  return {
    foods: Foods.find({}).fetch(),
    profiles: Profiles.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(Reviews);
