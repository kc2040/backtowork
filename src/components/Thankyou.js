import React, { useContext,  } from 'react'
import { Message } from 'semantic-ui-react'
import CartContext from '../context/cartContext'


export default function Thankyou() {
const { state, dispatch } = useContext(CartContext);   
    return (
        <>
            <Message>
                <Message.Header>Thank you!  <span style={{color:'grey'}}>
                    {' ' + state.personalInfo.fname + ' ' + state.personalInfo.lname + ' '} </span> for submitting.</Message.Header>
                
            </Message>
            <Message info>
                <Message.Header>message ...</Message.Header>
                <p>
                    message....
                    message....
                    message....
                 </p>
            </Message>
        </>
    )
}