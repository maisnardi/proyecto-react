import React from 'react'
import './itemfilter.css'

const ItemFilter = () => {
  return (
    <div>
      <h2>Filtrar por:</h2>
      <div className='contenedorTalle'>
        <h3>Talle:</h3>
        <div className='contenedorBotTalles'>
          <button>S</button>
          <button>M</button>
          <button>L</button>
        </div>
      </div>
      
      
      <h3>Color:</h3>
    </div>
  )
}

export default ItemFilter