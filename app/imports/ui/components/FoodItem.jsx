import React from 'react';
import { Table, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Foods } from '/imports/api/food/food';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a single row in the List Food table. See pages/Reviews.jsx. */
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
        <Table.Row>
          <Table.Cell>{this.props.food.name}</Table.Cell>
          <Table.Cell>{this.props.food.food}</Table.Cell>
          <Table.Cell><Image floated='right' size='mini' src={this.props.food.image}/>
          </Table.Cell>
<<<<<<< HEAD
          <Table.Cell>{this.props.food.restaurant}</Table.Cell>
          <Table.Cell>{this.props.food.price}</Table.Cell>
          <Table.Cell>{this.props.food.rating}</Table.Cell>
=======
          <Table.Cell>{this.props.food.cost}</Table.Cell>
>>>>>>> parent of 22729cd... implemented cards
          <Table.Cell>{this.props.food.location}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.food._id}`}>Edit</Link>
          </Table.Cell>
          <Table.Cell>
            <Button basic onClick={this.onClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodItem);
