import React, { useState } from 'react'
import './itemcount.css'

function ItemCount({ stock, initial, onAdd}) {
    const [unidad, setUnidad]=useState(initial)

    const sumar=()=>{
        if(unidad<stock)
        {
            setUnidad(unidad+1);
        }
    }
    const restar=()=>{
        if(unidad >1 )
        {
            setUnidad(unidad-1);
        }
    }

    return (
    <div className='contenedorSumadorUnidades'>
        <div className='contenedorContador' >
            <button className='botonRestar' disabled={unidad === 1} onClick={restar}>-</button>
            <p className='unidadesASumar' >{unidad}</p>
            <button className='botonSumar' disabled={unidad === stock} onClick={sumar} >+</button>
        </div>
        <button className='botonAgregarAlCarrito' onClick={()=>onAdd(unidad)} >Agregar al carrito</button> 
    </div>
  )
}

export default ItemCount