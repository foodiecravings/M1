import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ProfileItem extends React.Component {
  render() {
    return (
        <Item.Group>
          <Item>
            {/*<Item.Image size='tiny' src={this.props.profile.photo} />*/}

            <Item.Content>
              <Item.Header as='a'>{this.props.profile.firstname} {this.props.profile.lastname}</Item.Header>
              <Item.Meta>Bio</Item.Meta>
              <Item.Description>
                {this.props.profile.bio}
              </Item.Description>
              <Item.Extra>{this.props.profile.standing}</Item.Extra>
            </Item.Content>
          </Item>
          <Link to={`/edit/${this.props.profile._id}`}>Edit</Link>
        </Item.Group>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ProfileItem);
