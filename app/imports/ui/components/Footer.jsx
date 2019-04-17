import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Icon } from 'semantic-ui-react';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', marginTop: '20px' };
    return (
        <footer>
          <Menu style={menuStyle} attached="top" borderless inverted>
            <Menu.Item>
              <Header inverted as='h6'>Created @ 2019</Header>
            </Menu.Item>
            <Menu.Item fitted position="right" href="https://www.facebook.com/foodie.cravings.712">
              <Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted href="https://twitter.com/foodiecravings1"><Icon name="twitter"/>
            </Menu.Item>
            <Menu.Item fitted href="https://www.pinterest.com/foodiecravings8179/"><Icon name="pinterest"/>
            </Menu.Item>
            <Menu.Item fitted href="https://www.instagram.com/fooodiecravings/?hl=en"><Icon name="instagram"/>
            </Menu.Item>
            ) : ''}
          </Menu>
        </footer>
    );
  }
}

export default Footer;
