import React from 'react'
import CircleButton from './CircleButton';
import './colorbutton.css'

const ColorButton = ({items,colorFilter}) => {
  
  return (
    <div className='contenedorColores'>
        {
        items.map((producto) => {
            return <CircleButton colorFilter={colorFilter} producto={producto} key={producto.id}/>;
            })
        }
    </div>
  )
}

export default ColorButton