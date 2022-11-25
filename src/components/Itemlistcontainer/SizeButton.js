
import React from 'react'

const SizeButton = () => {
  return (
    <div className='contenedorBotTalles'>
          <button className={styleS} onClick={()=>{sizeFilter("S"); changeStyle("S")}}>S</button>
    </div>
  )
}

export default SizeButton