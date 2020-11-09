import React from 'react'
import { Button, Icon, Message } from 'semantic-ui-react'


export default function Welcome({history})
{
    const msgstyle = {
    position: 'absolute',
    top: '20%',
    width: '60%',
    background: 'transparent',
    boxShadow: 'none',
    borderWidth: '0',
  };

    return (
        <Message style={msgstyle}>
          <Message.Header>Welcome message .....</Message.Header>
          <p>
            We updated our privacy policy here to better service our customers.
            We recommend reviewing the changes.
          </p>
          <Button
            onClick={() => history.push('/rtwform')}
            size='large'
            primary
            color='blue'
          >
            return to work
            <Icon name='right arrow' />
          </Button>
        </Message>
    )

}