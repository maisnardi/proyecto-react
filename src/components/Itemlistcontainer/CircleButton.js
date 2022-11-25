import React from 'react'
import { useState } from 'react'
import './circlebutton.css'


const CircleButton = ({producto,colorFilter}) => {
  const [color, setColor] = useState(`contenedor${producto.color}`)
  const changeClass=()=>{
    setColor("buttonClick");
  }

  return (
    <div className={color}>
        {/* <button className={`boton${producto.color}`} onClick={()=>{colorFilter(producto.color); changeClass()}}></button> */}
        <input className={`boton${producto.color}`} type="radio" name="color" value={color}></input>
    </div>
  )
}

export default CircleButton