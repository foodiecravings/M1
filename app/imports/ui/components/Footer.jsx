import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Icon } from 'semantic-ui-react';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px' };
    return (
        <footer>
          <Menu style={menuStyle} attached="top" borderless inverted>
            <Menu.Item>
              <Header inverted as='h6'>Created @ 2019</Header>
            </Menu.Item>
            <Menu.Item fitted position="right"><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            ) : ''}
          </Menu>
        </footer>
    );
  }
}

export default Footer;
