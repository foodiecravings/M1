import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Image, Header, Loader, Grid, Modal, Button, TextArea, Card } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { Notes } from '/imports/api/note/note';
import FoodItem from '/imports/ui/components/FoodItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

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
                <Image circular size='small' className='profileImage'
                       src='https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_.jpg'/>
                <br/><br/>
                <Modal trigger={<Button>Edit Photo</Button>}>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image
                        wrapped
                        size='medium'
                        circular
                        src='https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_.jpg'
                    />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <TextArea placeholder='Enter Image URL here'/>

                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column>
                <p>
                  Name: Roderick Tabalba
                </p>
                <p>
                  Description: This is a description
                </p>
                <Modal trigger={<Button>Edit Photo</Button>}>
                  <Modal.Header>Edit Profile</Modal.Header>
                  <Modal.Content image>
                    <Image
                        wrapped
                        size='medium'
                        circular
                        src='https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png'
                    />
                    <Modal.Description>
                      <Header>Edit Profile</Header>
                      <TextArea placeholder='Enter First Name'/>
                      <TextArea placeholder='Enter Last Name'/>
                      <TextArea placeholder='Tell us about yourself'/>
                      <TextArea placeholder='Standing'/>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Container>
          <Header as="h2" textAlign="center">Reviews Made:</Header>
          <Card.Group itemsperRow={_.size(this.props.foods)}>
            {this.props.foods.map((food, index) => <FoodItem key={index}
                         food={food}
                         notes={this.props.notes.filter(note => (note.contactId === food._id))}/>)}
          </Card.Group>
        </div>
    );
  }
}

/** Require an array of Food documents in the props. */
Profile.propTypes = {
  foods: PropTypes.array.isRequired,
  notes: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Food documents.
  const subscription = Meteor.subscribe('Food');
  const subscription2 = Meteor.subscribe('Notes');
  return {
    foods: Foods.find({}).fetch(),
    notes: Notes.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(Profile);
