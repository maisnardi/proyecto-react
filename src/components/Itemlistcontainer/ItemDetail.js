import React from 'react'
import './itemdetail.css'
import ItemCount from './ItemCount'
import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {
  const [cant, setCant] = useState(0); 
  
  const {addToCart,iniUnidades } = useContext(CartContext);
  const inicial= iniUnidades(producto);
  const onAdd = (cantidad)=>{
    setCant(cantidad);
    addToCart(producto,cantidad);
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
          <div className='mensajeUnidades'>
            {inicial ===1  && <h3>Hay {inicial} unidad de este producto en el carrito</h3>}
            {inicial >1  && <h3>Hay {inicial} unidades de este producto en el carrito</h3>}
          </div>
      </article>
       <div className='contenedorItemCount'>
        {cant===0 ? (
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        ):(
          <div className='contenedorAgregado'>
          <h3>Elemento agregado al carrito!</h3>
          <Link className='botAlCarrito' to={'/cart'} >Ir al carrito</Link>
        </div>
        )}
      </div>
  </div>
  )
}

export default ItemDetail