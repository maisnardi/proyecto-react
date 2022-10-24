import React from 'react'
import { useState, useEffect } from 'react';
import { productos } from '../../mock/productos';
import './itemlistcontainer.css'
import ItemList from './ItemList';

function ItemListContainer({saludo}) {
  const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(productos);
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
    }, []);

  return (
    <div>
      <h1 className='saludoInicio'>{saludo}</h1>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer