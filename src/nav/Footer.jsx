import React from 'react';
import { Menu } from 'semantic-ui-react';
import Moment from 'moment';

export default function Footer() {
  return (
    <Menu
      color='#dcdcdc'
      fluid
      widths={6}
      fixed='bottom'
      position='absolute'
      borderless
      style={{ boxShadow: 'none', borderWidth: '0' }}
    >
      <Menu.Item>{Moment(Date()).format('YYYY')} © Randstad</Menu.Item>
      <Menu.Item>Terms</Menu.Item>
      <Menu.Item>Privacy</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
  );
}
