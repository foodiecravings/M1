import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Image, Header, Loader, Grid, Modal, Button, TextArea } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
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
                <Image centered circular size='small' className='profileImage'
                       src='http://www.cernasolutions.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-01-at-5.15.37-PM.png'/>
                       <br/><br/>
                <Modal trigger={<Button>Edit Photo</Button>}>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' circular src='http://www.cernasolutions.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-01-at-5.15.37-PM.png'/>
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <TextArea placeholder='Enter Image URL here' />

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
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Container>
          <Container>
            <Header as="h2" textAlign="center">Reviews Made:</Header>
            {this.props.foods.map((food) => <FoodItem key={food._id} food={food}/>)
              /* found issue here regarding exit code 1 */}
          </Container>
        </div>
    );
  }
}

/** Require an array of Food documents in the props. */
Profile.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Food documents.
  const subscription = Meteor.subscribe('Food');
  return {
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profile);
