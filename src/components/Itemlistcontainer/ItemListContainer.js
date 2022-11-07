import React from 'react'
import { useState, useEffect } from 'react';
import { productos } from '../../mock/productos';
import './itemlistcontainer.css'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import ItemFilter from './ItemFilter';

function ItemListContainer({saludo}) {
  const [items, setItems] = useState([]);
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
      });   
  }, [id]);

  return (
    <div>
      <h1 className='saludoInicio'>{saludo}</h1>
      <div className='contenedorMain'>
        <div className='contenedorFiltro'>
          <ItemFilter/>
        </div>
        <ItemList items={items} />
      </div>
    </div>
  )
}

export default ItemListContainer