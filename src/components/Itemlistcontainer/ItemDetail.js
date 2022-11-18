import React from 'react'
import './itemdetail.css'
import ItemCount from './ItemCount'
import ItemFeatures from './ItemFeatures'
import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {
  const [cant, setCant] = useState(0); 
  console.log(producto)

  const { addToCart } = useContext(CartContext);
  const onAdd = (cantidad)=>{
    setCant(cantidad);
    addToCart(producto,cantidad);
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
        {cant === 0 ? (
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        ):(
          <div className='contenedorAgregado'>
          <h2>Elemento agregado al carrito!</h2>
          <Link to={'/cart'} >Ir al carrito</Link>
        </div>
        
        )}
      </div>
  </div>
  )
}

export default ItemDetail