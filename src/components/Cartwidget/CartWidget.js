import React from 'react'
import { useContext } from 'react'
import './cartwidget.css';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);
  return (
    <>
      <span className='material-symbols-outlined'>
          shopping_cart
      </span>
    <span className='muestraUnidades'>{totalUnidades() !==0 && totalUnidades()}</span>
    </>

  )
}

export default CartWidget