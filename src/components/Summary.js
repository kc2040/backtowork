import React, { useContext,  } from 'react'
import CartContext from '../context/cartContext'
import { Button,  Divider,  Grid,  Image,  Label, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import styles from '../context/constants'



export default function Summary() {
   

    const { state, dispatch } = useContext(CartContext);   

    function handleToggle(product) {
        dispatch({ type: 'handleToggle', payload: product });
    }

   
    return (
        <>
            <Segment style={styles.borderless} clearing >
        
                <Message style={styles.borderless}>
                    <h4 style={styles.lightGreyFont}>{'About you'}</h4>
                    <Divider></Divider>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                First name
                        </Grid.Column>
                            <Grid.Column width={12}>
                                <h5 style={styles.greyFont}>{state.personalInfo.fname}</h5>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                Last name
                        </Grid.Column>
                            <Grid.Column width={12}>
                                <h5 style={styles.greyFont}>{state.personalInfo.lname}</h5>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                Email
                        </Grid.Column>
                            <Grid.Column width={12}>
                                <h5 style={styles.greyFont}>{state.personalInfo.email}</h5>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                Cell phone
                        </Grid.Column>
                            <Grid.Column width={12}>
                                <h5 style={styles.greyFont}>{state.personalInfo.cell}</h5>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                Date
                        </Grid.Column>
                            <Grid.Column width={12}>
                                <h5 style={styles.greyFont}> {state.personalInfo.date && Moment(state.personalInfo.date).format('MM-DD-YYYY')}</h5>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
         
                </Message>
                <Segment style={styles.borderless} clearing>
                    <Button size='tiny' color='blue' as={Link} to='/thankyou' floated='right'
                        disabled={state.products.filter(t => t.selected === true).length === 0}
                    >
                         Submit
                    </Button>
                    <Button basic size='tiny' as={Link} to='/rtwform' floated='right'>{'<< Back'}</Button>
                </Segment>
       
                {                            
                    state.products.filter(t => t.selected === true).length === 0 &&
                    <h5  style={styles.redText}>{'Please select offering(s)'}</h5>
                }
                {                            
                    state.products.filter(t => t.selected === true).length > 0 &&
                    <h5  style={styles.greyFont}>{'Review your selections'} </h5>
                }     
                        
                <Divider></Divider>
                <Grid size='small'>
                    {state.products.map((product) => (
                        product.selected &&
                        
                            <Grid.Row key={product.id}>
                                <Grid.Column width={4}>
                                    <Image
                                        responsive='true'
                                        src={product.img}
                                        circular
                                        alt='my image'
                                        width='40'
                                        height='40'
                                    />
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    <h4 style={styles.greyFont}>
                                        {product.name || ' '}
                                    </h4>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Button
                                        onClick={() =>
                                            handleToggle(product)
                                        }
                                        icon='remove'
                                        color='red'
                                        size='tiny'
                                    />
                                </Grid.Column>

                            </Grid.Row>
                        
                    ))}
                </Grid>
             
            </Segment>
            
        </>
    
    )
}