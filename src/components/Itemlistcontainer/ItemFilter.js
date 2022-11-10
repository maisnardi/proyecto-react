import React from 'react'
import './itemfilter.css'
import { NavLink } from 'react-router-dom';

const ItemFilter = () => {
  return (
    <div>
      <h2>Filtrar por:</h2>
      <div className='contenedorTalle'>
        <h3>Talles:</h3>
        <div className='contenedorBotTalles'>
          <NavLink to={'/size/s'}><button>S</button></NavLink>
          <button>M</button>
          <button>L</button>
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