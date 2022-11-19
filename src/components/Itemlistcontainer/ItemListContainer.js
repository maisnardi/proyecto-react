import React from 'react'
import { useState, useEffect } from 'react';
import { productos } from '../../mock/productos';
import './itemlistcontainer.css'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import ItemFilter from './ItemFilter';
import ScaleLoader from "react-spinners/ScaleLoader";

function ItemListContainer({saludo}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading]= useState(true)
  const {id}= useParams();

  useEffect(() => {
    const getProducts = () => {
      return new Promise((res, rej) => {
        const productosFiltrados = productos.filter((productos)=>productos.category === id)
        const ref = id ? productosFiltrados : productos
        setTimeout(() => {
          res(ref);
        }, 2000);
      });
    };
        
    getProducts()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        setLoading(false);
      }); 
      return ()=> setLoading(true)  
  }, [id]);

  if(loading){
    return(
      <div className='contenedorSpinner'>
        <ScaleLoader color="#ad6d32" height={60}  />
      </div>
      )}

  return (
    <div>
      <h1 className='saludoInicio'>{saludo}</h1>
      <div className='contenedorMain'>
        <div className='contenedorFiltro'>
          <ItemFilter/>
        </div>
        <div className='contenedorItemList'>
          <ItemList items={items} />
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer