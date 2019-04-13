import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.food.name}</Table.Cell>
          <Table.Cell>{this.props.food.food}</Table.Cell>
          <Table.Cell><Image floated='right' size='mini' src={this.props.food.image}/>
          </Table.Cell>
          <Table.Cell>{this.props.food.cost}</Table.Cell>
          <Table.Cell>{this.props.food.location}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.food._id}`}>Edit</Link>
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
