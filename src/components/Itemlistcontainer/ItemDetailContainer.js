import React from 'react'
import { useState, useEffect } from 'react';
// import { productos } from '../../mock/productos';
import './itemdetailcontainer.css'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

function ItemDatailContaiener() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  const {id}= useParams();

    useEffect(() => {
      const collectionProd = collection(db, 'productos');
      const ref = doc(collectionProd, id);

      getDoc(ref)
        .then((res) => {
           setItem({
              id: res.id,
              ...res.data(),
            });
          })
          .catch((error) => {
              console.log(error);
          })
          .finally(() => {
              setLoading(false);
          });


        // const getProduct = () => {
        //     const producto = productos.find((prod) => prod.id===(Number(id)))
        //     return new Promise((res, rej) => {
        //         setTimeout(() => {
        //             res(producto);
        //         }, 2000);
        //     });
        // };
        // getProduct()
        //     .then((res) => {
        //         setItem(res);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(()=>{
        //       setLoading(false);
        //     });

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
      <ItemDetail producto={item} inicial={3}/>
    </div>
  )
}

export default ItemDatailContaiener