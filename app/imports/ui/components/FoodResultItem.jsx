import React from 'react';
import { Image, Card, Icon, Feed, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Foods } from '/imports/api/food/food';
import { Bert } from 'meteor/themeteorchef:bert';
import Note from '/imports/ui/components/Note';
import AddNote from '/imports/ui/components/AddNote';

/** Renders a single row in the List Food table. See pages/Profile.jsx. */
class FoodResultItem extends React.Component {

  constructor(props) {
    super(props);
    this.addFav = this.addFav.bind(this);
  }

  addFav() {
    if (this.props.food.favorite === false) {
      Foods.update(this.props.food._id, { $set: { favorite: true } });
      Bert.alert({ type: 'success', message: 'Favorites add succeeded' });
    }
  }

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
                <Button basic onClick={this.addFav}>Add to Favorites</Button>
              </a>
            </Card.Content>
          </Card.Content>
          <Card.Content extra>Location: Off Campus</Card.Content>
          <Card.Content extra>
            <Feed>
              {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
            </Feed>
          </Card.Content>
          <Card.Content extra>
            <AddNote owner={this.props.food.owner} foodId={this.props.food._id}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FoodResultItem.propTypes = {
  food: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodResultItem);
