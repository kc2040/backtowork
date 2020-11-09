import React from 'react';
import {
  Button,
  Container,
  Icon,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';
import Welcome from './components/Welcome';
import { PUBLIC_FOLDER } from './context/consts';
import Footer from './nav/Footer';
import NavBar from './nav/NavBar';

export default function HomePage({ history }) {
  const background = { backgroundSize: 'cover' };
  const imgURL = PUBLIC_FOLDER;

  return (
    <div style={{ background: '#fff' }}>
      <Image
        style={background}
        responsive='true'
        src={imgURL + 'businessoffice.png'}
      ></Image>

      <Button size='small' disabled basic>
        <Image
          size='small'
          src={imgURL + 'rt-logo-dark.png'}
          alt='rt-logo-dark'
          style={{
            position: 'absolute',
            top: '1%',
            left: '1%',
          }}
        />
      </Button>

      <Container>
        <Welcome history={history}></Welcome>
      </Container>
      <Footer></Footer>
    </div>
  );
}
