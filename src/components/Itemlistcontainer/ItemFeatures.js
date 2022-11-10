import React from 'react'
import './itemfeatures.css'

const ItemFeatures = ({size, color}) => {
  console.log(`boton${color}`)
  return (
    <div>
        <div className='contenedorBotTalles'>
          <button>{size}</button>
        </div>
        <div className='contenedorColores'>
          <h3>Color:</h3>
        <button className={`boton${color}`}></button>
      </div>
    </div>
  )
}

export default ItemFeatures