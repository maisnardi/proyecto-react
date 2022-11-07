import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='contenedorProducto'>
      <div className='contenedorImagenCard'>
        <img src={producto.img} width="284px" alt={producto.title}></img>
        <div className='separador'></div>
      </div>
      <div className='contenedorDatosItem' >
        <h2>{producto.title}</h2>
        <h3>Precio: ${producto.price}</h3>
      </div>
      <article className='contenedorVerProducto'>
          <Link to={`/item/${producto.id}`}><button>Ver producto</button></Link>
      </article>
    </div>
  )
}

export default Item