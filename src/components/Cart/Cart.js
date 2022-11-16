import React from 'react';
import './cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const {cart,deleteAll,totalUnidades,totalPrecio,deleteOne}=useContext(CartContext);
  console.log(cart)
  return (
    <div className='contenedorCarrito'>
    {cart.map((prod) => (
      <div key={prod.id} className='itemCarrito'>
        <div className='cartImg'>
          <img src={prod.img} alt={prod.title}/>
        </div>       
        <div>
          <h3>Producto:{prod.title}</h3>
          <h3>Cantidad:{prod.cantidad}</h3>
        </div>
        <div>
          <button className='eliminarUnidad' onClick={() => deleteOne(prod.id)}>Quitar producto</button>
        </div>
      </div>
    ))}
    <div className='contenedorTotales'>
      <h3>Total unidades: {totalUnidades()}</h3>
      <h3>Total carrito: {totalPrecio()}$</h3>
      <button onClick={deleteAll}>Vaciar carrito</button>
    </div>
</div>
);
}

export default Cart