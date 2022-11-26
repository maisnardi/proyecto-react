import React from 'react';
import './itemfilter.css';
import { useState } from 'react';
import ColorButton from './ColorButton';


const ItemFilter = ({sizeFilter,items,colorFilter,resetFilter}) => {
  const [styleS,setStyleS] = useState("botonTalle")
  const [styleM,setStyleM] = useState("botonTalle")
  const [styleL,setStyleL] = useState("botonTalle")
  
  const changeStyle = (buttonSize)=>{
    if(buttonSize==="S"){
      setStyleM("botonTalle");
      setStyleL("botonTalle");
      setStyleS("clicked")
    }
    else if(buttonSize==="M"){
      setStyleM("clicked");
      setStyleL("botonTalle");
      setStyleS("botonTalle")
    }
    else if(buttonSize==="L"){
      setStyleM("botonTalle");
      setStyleL("clicked");
      setStyleS("botonTalle")
    }
    else{
      setStyleM("botonTalle");
      setStyleL("botonTalle");
      setStyleS("botonTalle");
    }
  }


  const deleteFilter=()=>{
    setStyleM("botonTalle");
    setStyleL("botonTalle");
    setStyleS("botonTalle");
  
  }
  return (
    <div>
      <h2>Filtrar por:</h2>
      <div className='contenedorTalle'>
        <h3>Talles:</h3>
        <div className='contenedorBotTalles'>
          <button className={styleS} onClick={()=>{sizeFilter("S"); changeStyle("S")}}>S</button>
          <button className={styleM} onClick={()=>{sizeFilter("M"); changeStyle("M")}}>M</button>
          <button className={styleL} onClick={()=>{sizeFilter("L"); changeStyle("L")}}>L</button>
        </div>
      </div>
      <h3>Colores:</h3>
      <ColorButton colorFilter={colorFilter} items={items}/>   
      <button className='resetButton' onClick={()=>{ resetFilter();deleteFilter()}}>Limpiar Filtros</button>
    </div>
   )
}

export default ItemFilter