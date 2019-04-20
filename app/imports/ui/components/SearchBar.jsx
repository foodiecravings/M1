import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Segment, Header } from 'semantic-ui-react'
import { Foods } from '/imports/api/food/food';
import faker from 'faker'
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";

const source = Meteor.settings.defaultFoods;

class SearchBar extends Component {

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () =>
      this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name });
    // window.location.assign("/results");
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.name);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.stuff.name, isMatch),
      })
    }, 300)
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
        <Grid>
          <Grid.Column>
            <Search className='search-bar'
                    fluid
                    placeholder='Search for your food'
                    input={{ fluid: 'true', transparent: 'true', icon: 'search', iconPosition: 'left' }}
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                      leading: true,
                    })}
                    results={results}
                    value={value}
                    {...this.props}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment>
              <Header>State</Header>
              <pre style={{ overflowX: 'auto' }}>{JSON.stringify(this.state, null, 2)}</pre>
              <Header>Options</Header>
              <pre style={{ overflowX: 'auto' }}>{JSON.stringify(Meteor.settings.defaultData, null, 2)}</pre>
            </Segment>
          </Grid.Column>
        </Grid>

        /* renders back end database stuff, good for visualizing the data.
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(this.state, null, 2)}
            </pre>
            <Header>Options</Header>
            <pre style={{ overflowX: 'auto' }}>
              {JSON.stringify(source, null, 2)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
      */

    )
  }
}

/** Require an array of Food documents in the props. */
SearchBar.propTypes = {
  results: PropTypes.array.isRequired,
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  stuff: PropTypes.object.isRequired,

};

export default withTracker(() => {
  // Get access to Food documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchBar);
