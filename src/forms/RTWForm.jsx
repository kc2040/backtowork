import React, { useContext, useReducer, useState } from 'react';

import CartContext from '../context/cartContext';

import {
  Button,
  Divider,
  Form,
  Grid,
  Input,
  Label,
  Message,
  Segment,
} from 'semantic-ui-react';

import useForm from '../formValidation/userForm';
import validate from '../formValidation/validate';
import Item from '../components/Item';
import { useHistory } from 'react-router-dom';
import styles from '../context/constants';

export default function RTWForm() {
  //const [cart, setCart] = useReducer(cartReducer, []);
  const { state, dispatch } = useContext(CartContext);

  const formData = state.personalInfo;
  //const { fname, lname, email, cell, date } = formData;
  const [tncCheck, setTncCheck] = useState(false);

  const onClear = () => {
    //clear context
    const infoChanged = {
      ...state.personalInfo,
      fname: '',
      lname: '',
      email: '',
      cell: '',
      date: '',
    };
    dispatch({
      type: 'infoChange',
      payload: infoChanged,
    });
  };

  function handleCheck({ target }) {
    setTncCheck(target.checked);
    console.log(target.checked);
  }

  function handleToggle(product) {
    dispatch({ type: 'handleToggle', payload: product });
  }
  const history = useHistory();

  const { values, errors, handleChange, handleSubmit } = useForm(
    showSummary,
    validate
  );

  const count = state.products.filter((t) => t.selected === true).length;

  function showSummary() {
    if (count > 0) {
      //prevstate => ({ count: prevstate.count + 1})
      const prodSelected = state.prodError;
      dispatch({ type: 'prodError', payload: null });
    } else {
      dispatch({ type: 'prodError', payload: 'Select an offering' });
    }

    if (count) {
      history.push('/summary');
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <Message size='large' style={styles.segment}>
          <h5 style={styles.greyFont}>Fill out the form below !</h5>

          <Grid relaxed='very' stackable>
            <Grid.Row>
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={10}>
                <Form.Group widths='equal'>
                  <div className='field'>
                    <div className='control'>
                      <Input
                        placeholder='first name'
                        className={`input ${errors.fname && 'is-danger'}`}
                        name='fname'
                        onChange={handleChange}
                        value={values.fname || ''}
                        required
                      />
                    </div>
                    {errors.fname && (
                      <p style={styles.redText}>{errors.fname}</p>
                    )}
                  </div>
                  <div className='field'>
                    <div className='control'>
                      <Input
                        placeholder='last name'
                        className={`input ${errors.lname && 'is-danger'}`}
                        name='lname'
                        onChange={handleChange}
                        value={values.lname || ''}
                        required
                      />
                    </div>
                    {errors.lname && (
                      <p style={styles.redText}>{errors.lname}</p>
                    )}
                  </div>
                </Form.Group>
                <div className='field'>
                  <div className='control'>
                    <Input
                      placeholder='jondoe@email.com'
                      autoComplete='off'
                      className={`input ${errors.email && 'is-danger'}`}
                      type='email'
                      name='email'
                      onChange={handleChange}
                      value={values.email || ''}
                      required
                    />
                    {errors.email && (
                      <p style={styles.redText}>{errors.email} a@yahoo.com</p>
                    )}
                  </div>
                </div>
                <div className='field'>
                  <div className='control'>
                    <Input
                      placeholder='cell number'
                      className={`input ${errors.cell && 'is-danger'}`}
                      name='cell'
                      onChange={handleChange}
                      value={values.cell || ''}
                    />
                  </div>
                  {errors.cell && <p style={styles.redText}>{errors.cell}</p>}
                </div>
                <div className='field'>
                  <div className='control'>
                    <Input
                      label='Return date'
                      placeholder='mm/dd/yyyy'
                      type='date'
                      className={`input ${errors.date && 'is-danger'}`}
                      name='date'
                      onChange={handleChange}
                      value={values.date || ''}
                      required
                    />
                  </div>
                  {errors.date && <p style={styles.redText}>{errors.date}</p>}
                </div>
                {/* <Form.Checkbox
                  inline
                  label='I agree to the terms and conditions '
                  onChange={handleCheck}
                /> */}
                <Button basic size='small' onClick={onClear}>
                  Cancel
                </Button>
                <Button primary type='submit' size='small'>
                  {'>> Next'}
                </Button>

                {state.prodError && (
                  <p style={styles.redText}>{'Please select offering(s)'}</p>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Message>
      </Form>
      <h4 style={styles.greyFont}>
        Select all Offerings you would like in your solution
      </h4>

      <Segment style={styles.boderless}>
        <Grid columns={4}>
          <Grid.Row align='center'>
            {state.products.map((product) => (
              <Grid.Column
                style={{
                  borderWidth: 0,
                  background: 'none',
                  minWidth: 220,
                  maxWidth: 250,
                  minHeight: 250,
                  align: 'center',
                }}
                key={product.id}
              >
                <Item
                  handleToggle={handleToggle}
                  key={product.id}
                  product={product}
                  styles={styles}
                  align='center'
                />
              </Grid.Column>
            ))}
          </Grid.Row>
          <Divider></Divider>
        </Grid>
      </Segment>
    </>
  );
}
