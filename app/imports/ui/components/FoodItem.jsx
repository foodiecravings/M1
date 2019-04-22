import React from 'react';
import { Image, Button, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Foods } from '/imports/api/food/food';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a single row in the List Food table. See pages/Profile.jsx. */
class FoodItem extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    /* eslint-disable-next-line */
    if (confirm('Do you wish to delete this food item?')) {
      Foods.remove(this.props.food._id, this.deleteCallback);
    }
  }

  render() {
    return (
        <Card raised centered className='landing-page-card-background'>
          <Card.Content>
            <Card.Header>Review From: {this.props.food.owner}</Card.Header>
            <Image circular className='landing-page-image' src={this.props.food.image}/>
            <Card.Header>{this.props.food.food}</Card.Header>
            <Card.Meta>From: {this.props.food.restaurant}</Card.Meta>
            <Card.Content extra>
              <a>
                Rating: 4.7 out of 5
                <Icon name="star"/>
              </a>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>Location: {this.props.food.location}</Card.Content>
          <Card.Content>
            <Button basic onClick={this.onClick}>Delete</Button>
            <Link to={`/edit/${this.props.food._id}`}>Edit</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodItem);
