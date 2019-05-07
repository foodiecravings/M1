import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Grid } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { Notes } from '/imports/api/note/note';
import FoodItem from '/imports/ui/components/FoodItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ProfileItem from '/imports/ui/components/ProfileItem';
import { Profiles } from '/imports/api/profile/profile';
import { Link } from 'react-router-dom';


/** Renders a table containing all of the Food documents. Use <FoodItem> to render each row. */
class Profile extends React.Component {


  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='landing'>
          <Container className='profileBackground'>
            <Grid centered columns={2}>
              <Grid.Column>
                <Header as="h2" textAlign="center">Profile</Header>
                {this.props.profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />)}
              </Grid.Column>
              <Grid.Column>
                {this.props.currentUser === '' ? (
                    <Link to={`/UpdateProfile/${this.props.profiles._id}`}>Add a Profile</Link>
                ) : (
                    <Header as='h2' textAlign="center">Welcome to FoodieCravings</Header>
                )}
                  </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Container>
          <Grid centered rows={4}>
            <Grid.Row>
              <Header as="h2" textAlign="center">Reviews Made:</Header>
            </Grid.Row>
            <Grid.Row>
            {this.props.foods.map((food, index) => <FoodItem
                key={index} food={food} notes={this.props.notes.filter(note => (note.foodId === food._id))}/>)}
            </Grid.Row>
            <Grid.Row>
              <Header as="h2" textAlign="center">Favorites:</Header>
            </Grid.Row>
          <Grid.Row>
            {(this.props.foods.filter(foods => foods.favorite === true).map((food, index) => <FoodItem
                key={index} food={food}
                   notes={this.props.notes.filter(note => (note.foodId === food._id))}/>))}
          </Grid.Row>
          </Grid>
        </div>
    );
  }
}

/** Require an array of Food documents in the props. */
Profile.propTypes = {
  foods: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Food documents.
  const subscription = Meteor.subscribe('Food');
  const subscription2 = Meteor.subscribe('Notes');
  const subscription3 = Meteor.subscribe('Profile');
  return {
    foods: Foods.find({}).fetch(),
    notes: Notes.find({}).fetch(),
    profiles: Profiles.find({}).fetch(),
    currentUser: Profiles.find({}).fetch() === 0 ? '' : Profiles.findOne(Meteor.user()),
    ready: (subscription.ready() && subscription2.ready() && subscription3.ready()),
  };
})(Profile);
