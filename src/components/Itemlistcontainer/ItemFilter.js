import React from 'react'
import './itemfilter.css'
import { useState } from 'react'

const ItemFilter = ({sizeFilter}) => {
  const [style,setStyle] = useState("botonTalle")
  // const [sizeM,setSizeM] = useState('')
  // const handleSizeM = (e)=>setSizeM(e.target.value);
  // const changeStyle = (estilo)=>{
  //   setStyle(estilo)
  // }

  return (
    <div>
      <h2>Filtrar por:</h2>
      <div className='contenedorTalle'>
        <h3>Talles:</h3>
        <div className='contenedorBotTalles'>
          <button className={style} onClick={()=>{sizeFilter("S"); changeStyle("clicked")}}>S</button>
          {/* <input type="checkbox" className='botonTalle' onClick={handleSizeM()} name="talleM" value="sizeM"></input> */}
          <button className='botonTalle' onClick={()=>sizeFilter("L")}>L</button>
        </div>
      </div>
      <h3>Colores:</h3>
      <div className='contenedorColores'>
        <button className='botonRojo'></button>
        <button className='botonAzul'></button>
        <button className='botonBlanco'></button>
        <button className='botonGris'></button>
        <button className='botonMarron'></button>
        <button className='botonVerde'></button>
        <button className='botonVeige'></button>
      </div>
    </div>
  )
}

export default ItemFilter