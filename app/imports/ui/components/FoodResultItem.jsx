import React from 'react';
import { Image, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/*
import { Foods } from '/imports/api/food/food';
*/

/** Renders a single row in the List Food table. See pages/Profile.jsx. */
class FoodResultItem extends React.Component {
  render() {
    return (
        <Card raised centered className='landing-page-card-background'>
          <Card.Content>
            <Card.Header>{this.props.food.food}</Card.Header>
            <Image className='food-results-item-image' src={this.props.food.image}/>
            <Card.Header>{this.props.food.restaurant}</Card.Header>
            <Card.Meta>From: {this.props.food.location}</Card.Meta>
            <Card.Content extra>
              <a>
                {this.props.food.rating}
                <Icon name="star"/>
              </a>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>Location: Off Campus</Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FoodResultItem.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodResultItem);
