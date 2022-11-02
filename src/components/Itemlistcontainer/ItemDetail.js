import React from 'react'
import './itemdetail.css'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
    console.log(producto)
    const onAdd = (cantidad)=>{
      console.log(`Se agregaron ${cantidad} productos al carrito`)
    }
    return (
    <div className='contenedorItemDetail'>
        <div>
          <img src={producto.img} width="200px" alt={producto.title}></img>
        </div>
        <article>
            <h2>{producto.title}</h2>
            <h3>${producto.price}</h3>
        </article>
        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail