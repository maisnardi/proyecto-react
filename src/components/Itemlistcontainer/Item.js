import React from 'react'
import './item.css'

const Item = ({producto}) => {
  return (
    <div className='contenedorProducto'>
      <div className='contenedorImagenCard'>
        <img src={producto.img} width="200px" alt={producto.title}></img>
      </div>
        <article>
            <h2>{producto.title}</h2>
            <h3>${producto.price}</h3>
        </article>
    </div>
  )
}

export default Item