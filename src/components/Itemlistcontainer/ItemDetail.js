import React from 'react'
import './itemdetail.css'
import ItemCount from './ItemCount'
import ItemFeatures from './ItemFeatures'

const ItemDetail = ({producto}) => {
    console.log(producto)
    const onAdd = (cantidad)=>{
      console.log(`Se agregaron ${cantidad} productos al carrito`)
    }
    return (
    <div className='contenedorItemDetail'>
        <div className='contenedorImagenDetail'>
          <img src={producto.img} alt={producto.title}></img>
        </div>
        <article className='contenedorInfoDetail' >
            <h2>{producto.title}</h2>
            <h3>Precio: ${producto.price}</h3>
            <h4>Talle:{producto.size} </h4>
            <ItemFeatures size={producto.size} color={producto.color}/>
        </article>
        <div className='contenedorItemCount'>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default ItemDetail