import React from 'react';
import { Grid, Image} from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing'>
          <Grid container columns={3}>
            <Grid.Column>
              <h1>Featured Item:</h1>
              <Image className='landing-page-image' src="/images/laulau.png"/>
              <h2>Lau Lau</h2>
              <p>From: Helena's Hawaiian Food</p>
              <p>Rating: 4.7 out of 5</p>
              <p>Location: Off Campus</p>
            </Grid.Column>

            <Grid.Column>
              <h1>Top Rated Item:</h1>
              <Image className='landing-page-image' src="/images/hamburger.png"/>
              <h2>Hamburger</h2>
              <p>From: L&L Drive Inn</p>
              <p>Rating: 5 out of 5</p>
              <p>Location: Paradise Palms</p>
            </Grid.Column>
            <Grid.Column>
              <h1>Recently Added Item:</h1>
              <Image className='landing-page-image' src="/images/gchicken.png"/>
              <h2>Garlic Chicken</h2>
              <p>From: Aja</p>
              <p>Rating: 4 out of 5</p>
              <p>Location: Campus Center</p>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
