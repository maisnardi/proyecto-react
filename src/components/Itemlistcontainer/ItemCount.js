import React, { useState } from 'react'
import './itemcount.css'

function ItemCount({ stock, initial }) {
    const [unidad, setUnidad]=useState(initial)

    const sumar=()=>{
        if(unidad<stock)
        {
            setUnidad(unidad+1);
            console.log(unidad);
        }
    }
    const restar=()=>{
        if(unidad >=1 )
        {
            setUnidad(unidad-1);
            console.log(unidad);
        }
    }

    return (
    <div>
        <button className='botonSumar' onClick={sumar} >+</button>
        <button className='botonRestar'onClick={restar}>-</button>
        {/* <button className='botonAgregarAlCarrito'>Agregar al carrito</button> */}
    </div>
  )
}

export default ItemCount