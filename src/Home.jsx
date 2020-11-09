import React from 'react';
import { Button, Container, Icon, Image, Message } from 'semantic-ui-react';
import { IMG_FOLDER_PUBLIC } from './context/consts';

const url = 'https://raw.githubusercontent.com/kc2040/rtw/main/public/';

export default function HomePage({ history }) {
  const background = { backgroundSize: 'cover' };
  const msgstyle = {
    position: 'absolute',
    top: '20%',
    width: '60%',
    background: 'transparent',
    boxShadow: 'none',
    borderWidth: '0',
  };

  return (
    <div style={{ width: 'auto', background: '#fff' }}>
      <Image
        style={background}
        responsive='true'
        src={IMG_FOLDER_PUBLIC + 'businessoffice.png'}
        width='100%'
        height='100%'
      ></Image>

      <Button size='small' disabled basic>
        <Image
          size='small'
          src={IMG_FOLDER_PUBLIC + 'rt-logo-dark.png'}
          alt='rt-logo-dark'
          style={{
            position: 'absolute',
            top: '1%',
            left: '1%',
          }}
        />
      </Button>

      <Container>
        <Message style={msgstyle}>
          <Message.Header>Welcome message .....</Message.Header>
          <p>
            We updated our privacy policy here to better service our customers.
            We recommend reviewing the changes.
          </p>
          <Button
            onClick={() => history.push('/rtwform')}
            size='large'
            basic
            color='blue'
          >
            return to work
            <Icon name='right arrow' />
          </Button>
        </Message>
      </Container>
    </div>
  );
}
