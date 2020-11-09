import React, { useContext, useReducer, useState } from 'react';
import { Button, Image, } from 'semantic-ui-react';
import cartReducer from '../store/cartReducer';
import CartContext from '../context/cartContext';
import { IMG_FOLDER_ASSETS } from '../context/consts';



export default function Item({
  handleToggle,
  product,
  styles,
  
}) {
  const [isSelected, setSelected] = useState(product.selected);
  const [cart, setCart] = useReducer(cartReducer, []);
  const { state, dispatch } = useContext(CartContext);

  

  const handleToggleDELETE = (product) => {
    dispatch({ type: 'handleToggle', payload: product });
};

  return (
    <>
      <Button
        style={{
          backgroundColor: product.selected ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0)',
          //opacity: isSelected ? '0.5' : '1',
        }}
        onClick={() => handleToggle(product)}
      >
        <Image
          responsive='true'
          src={IMG_FOLDER_ASSETS + product.img}
          circular
          alt='my image'
          width='155'
          height='155'
          style={{
            borderStyle: product.selected ? 'solid' : 'none',
            borderColor: product.selected ? '#abb8c3' : 'teal',
            opacity: product.selected ? '0.5' : '1',
          }}
        ></Image>
        {product.selected && <span style={styles.figcaption}>SELECTED</span>}
        <p info='true' style={styles.buttonTextSelected}>
          {product.name}
        </p>
      </Button>
    </>
  );
}
