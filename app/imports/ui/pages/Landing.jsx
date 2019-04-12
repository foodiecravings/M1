import React from 'react';
import { Grid, Image, Card, Header, Container, Icon } from 'semantic-ui-react';
import SearchBar from '/imports/ui/components/SearchBar';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing'>
          <Grid centered columns={2}>
            <Grid.Column>
              <Container>
                <p className='landingFont'>
                  Do you ever have a craving for a certain food while on campus? By using foodie cravings, you will know
                  where to get it, if you can get it now, what it looks likes, how much it will cost, and what your
                  fellow students think of the food.
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid>

          <Container>
            <SearchBar className='search-bar'/>
          </Container>

          <Grid centered columns={3}>
            <Grid.Column>
              <Card centered>
                <Card.Content>
                  <Card.Header>Featured Item</Card.Header>
                  <Image circular className='landing-page-image' src="/images/laulau.png"/>
                  <Card.Header>Lau Lau</Card.Header>
                  <Card.Meta>From: Helena's Hawaiian Food</Card.Meta>
                  <Card.Content extra>
                    <a>
                      Rating: 4.7 out of 5
                      <Icon name="star"/>
                    </a>
                  </Card.Content>
                </Card.Content>
                <Card.Content extra>Location: Off Campus</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered>
                <Card.Content>
                  <Card.Header>Top Rated Item</Card.Header>
                  <Image circular className='landing-page-image' src="/images/hamburger.png"/>
                  <Card.Header>Hamburger</Card.Header>
                  <Card.Meta>From: L&L Drive Inn</Card.Meta>
                  <Card.Content extra>
                    <a>
                      Rating: 4.7 out of 5
                      <Icon name="star"/>
                    </a>
                  </Card.Content>
                </Card.Content>
                <Card.Content extra>Location: Paradise Palms</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered>
                <Card.Content>
                  <Card.Header>Recently Added Item</Card.Header>
                  <Image circular className='landing-page-image' src="/images/gchicken.png"/>
                  <Card.Header>Garlic Chicken</Card.Header>
                  <Card.Meta>From: Aja</Card.Meta>
                  <Card.Content extra>
                    <a>
                      Rating: 4.7 out of 5
                      <Icon name="star"/>
                    </a>
                  </Card.Content>
                </Card.Content>
                <Card.Content extra>Location: Campus Center</Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
          <br/><br/>
        </div>

    );
  }
}

export default Landing;
