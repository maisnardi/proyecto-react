import React from 'react'
import { useState } from 'react'
import './circlebutton.css'


const CircleButton = ({producto,colorFilter}) => {
  const [color, setColor] = useState(`${producto.color}`)
   
  return (
    <div className={color}>
        <button className={`boton${producto.color}`} onClick={()=>{colorFilter(producto.color);setColor(producto.color)}}></button>
    </div>
  )
}

export default CircleButton