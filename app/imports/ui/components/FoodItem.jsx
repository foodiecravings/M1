import React from 'react';
import { Table, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Foods } from '/imports/api/food/food';
import { Bert } from 'meteor/themeteorchef:bert';


/** Renders a single row in the Profile table. See pages/Profile.jsx. */
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
    if (confirm('Do you wish to delete this foodie?')) {
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
          <Table.Cell>{this.props.food.cost}</Table.Cell>
          <Table.Cell>{this.props.food.location}</Table.Cell>
          <Table.Row>
            <Link to={`/edit/${this.props.food._id}`}>Edit</Link>
          </Table.Row>
          <Table.Row>
            <Button basic onClick={this.onClick}>Delete</Button>
          </Table.Row>
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
