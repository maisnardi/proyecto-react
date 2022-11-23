import React from 'react'
import './checkout.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const {cart,totalPrecio}=useContext(CartContext);
    return (
    <div className='contenedorCheckout'>
        <h3 className='titleForm'>Ingrese sus datos para continuar con la compra</h3>
        <div className='dataProducts'>
            <form action=''>
                <label >Nombre</label>
                <input type="text" placeholder='Nombre'></input>
                <label >Apellido</label>
                <input type="text" placeholder='Apellido'></input>
                <label >Teléfono</label>
                <input type="number" placeholder='11 1111 1111'></input>
                <label >Correo electrónico</label>
                <input type="text" placeholder='rodriguez@gmail.com'></input>
                <label >Vuelva a escribir su correo electrónico</label>
                <input type="text" placeholder='rodriguez@gmail.com'></input>
                <button>Finalizar compra</button>
            </form>
            <div className='contenedorProd'>
                <div className='checkoutProducts'> 
                    <h2>Resumen de la compra:</h2>
                </div>
                <div className='resumenProductos'>
                    {cart.map((prod)=>(
                        <div key={prod.id}>
                            <ul>
                                <li>{prod.title} Talle: {prod.size} x {prod.cantidad}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='contenedorPrecio'>
                    <h3>El costo total de la compro es: ${totalPrecio()}</h3>
                </div>
            </div>

            </div>
    </div>
  )
}

export default Checkout