import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, List, Menu } from 'semantic-ui-react';
import styles from '../context/constants';
import { PUBLIC_FOLDER } from '../context/consts';
import Footer from './Footer';

export default function NavBar() {
  const imgURL = PUBLIC_FOLDER;
  const changeTitle = () => {
    switch (window.location.pathname) {
      case '/thankyou':
        return 'Thank you';
      case '/summary':
        return 'Summary';
      default:
        return 'Return to work';
    }
  };

  return (
    <Menu
      color='blue'
      inverted
      fluid
      widths={3}
      fixed='top'
      position='absolute'
      borderless
      style={{ boxShadow: 'none', borderWidth: '0' }}
    >
      <Menu.Item as={NavLink} exact to='/'>
        <Image
          size='small'
          src={imgURL + 'rt-logo-white.png'}
          alt='rt-logo-white'
        />
      </Menu.Item>
      <Menu.Item style={styles.lightGreyFont}>
        <h5 className='lightGreyFont'> {changeTitle()}</h5>
      </Menu.Item>
      <Menu.Item></Menu.Item>
      <Footer></Footer>
    </Menu>
  );
}
