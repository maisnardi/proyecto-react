import React from 'react'
import { useState, useEffect } from 'react';
import { productos } from '../../mock/productos';
import './itemdetailcontainer.css'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

function ItemDatailContaiener() {
  const [item, setItem] = useState({});
  const {id}= useParams();

    useEffect(() => {
        const getProduct = () => {
            const producto = productos.find((prod) => prod.id===(Number(id)))
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(producto);
                }, 2000);
            });
        };
        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    console.log(item)
  return (
    <div>
      <ItemDetail producto={item}/>
    </div>
  )
}

export default ItemDatailContaiener