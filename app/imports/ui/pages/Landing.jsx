import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import SearchBar from '/imports/ui/components/SearchBar';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing'>
          <Grid centered columns={1}>
            <Grid.Column>
              <Header as='h1' textAlign='center' inverted>
                Do you ever have a craving for a certain food while on campus? By using foodie cravings, you will know
                where to get it, if you can get it now, what it looks likes, how much it will cost, and what your
                fellow students think of the food.
              </Header>
            </Grid.Column>
          </Grid>
          <Grid centered columns={3}>
            <Grid.Column>
              <Card centered>
                <Card.Content>
                  <Card.Header>Featured Item</Card.Header>
                  <Image className='landing-page-image' src="/images/laulau.png"/>
                  <Card.Header>Lau Lau</Card.Header>
                  <Card.Description>From: Helena's Hawaiian Food</Card.Description>
                  <Card.Description>Rating: 4.7 out of 5</Card.Description>
                 <Card.Description>Location: Off Campus</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered>
               <Card.Content>
                 <Card.Header>Top Rated Item</Card.Header>
                 <Image className='landing-page-image' src="/images/hamburger.png"/>
                 <Card.Header>Hamburger</Card.Header>
                 <Card.Description>From: L&L Drive Inn</Card.Description>
                 <Card.Description>Rating: 5 out of 5</Card.Description>
                 <Card.Description>Location: Paradise Palms</Card.Description>
               </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered>
                <Card.Content>
                  <Card.Header>Recently Added Item</Card.Header>
                  <Image className='landing-page-image' src="/images/gchicken.png"/>
                  <Card.Header>Garlic Chicken</Card.Header>
                  <Card.Description>From: Aja</Card.Description>
                  <Card.Description>Rating: 4.5 out of 5</Card.Description>
                  <Card.Description>Location: Campus Center</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <br></br>
        </div>
    );
  }
}

export default Landing;
