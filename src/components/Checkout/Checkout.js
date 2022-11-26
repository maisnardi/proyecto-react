import React, { useState } from 'react'
import './checkout.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import ScaleLoader from "react-spinners/ScaleLoader";

const Checkout = () => {
    const {cart,totalPrecio,deleteAll}=useContext(CartContext);
    
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone,setPhone] = useState('');
    const [adress,setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [verificatioEmail, setVerificationEmail] = useState('');
    const [orderId,setOrderId] = useState('');
    const [loading, setLoading]= useState(false)

    const handleName = (e)=>setName(e.target.value);
    const handleLastName = (e)=>setLastName(e.target.value);
    const handlePhone = (e)=>setPhone(e.target.value);
    const handleAdress = (e)=>setAdress(e.target.value);
    const handleEmail  = (e)=>setEmail(e.target.value);
    const handleVerificationEmail  = (e)=>setVerificationEmail(e.target.value);

    const enviarDatos = (e)=>{
        e.preventDefault();
        setLoading(true)
   
        const objOrden = {
            buyer: {name,lastName,phone,adress,email},
            item:cart,
            total:totalPrecio(),
            date: serverTimestamp(),
        };
        const orderCollection = collection(db,"orders");
        
        addDoc(orderCollection,objOrden)
        .then((res)=>{
            setOrderId(res.id);
            deleteAll();
            
        })
        .catch((error)=>{
            console.log('Error en la compra', error)
        })
        .finally(() => {
            setLoading(false);
        });
    };
    if(orderId){
        return(
            <div className='contenedorSeguimiento'>
                <h1 className='mensajeExito'>Muchas gracias por tu compra!</h1> 
                <h2 className='seguimiento'> Tu número de orden es {orderId}</h2>
            </div>
        )
    }

    if(loading){
        return(
          <div className='contenedorSpinner'>
            <ScaleLoader color="#ad6d32" height={60}  />
          </div>
          )};

    return (
    <div className='contenedorCheckout'>
        <h3 className='titleForm'>Ingrese sus datos para continuar con la compra</h3>
        <div className='dataProducts'>
            <form action='' onSubmit={enviarDatos}>
                <label >Nombre</label>
                <input type="text" placeholder='Nombre' name='nombre' onChange={handleName} value={name} required></input>
                <label >Apellido</label>
                <input type="text" placeholder='Apellido'name='apellido' onChange={handleLastName} value={lastName} required></input>
                <label >Dirección</label>
                <input type="text" placeholder='Dirección' name='direccion' onChange={handleAdress} value={adress} required></input>
                <label >Teléfono</label>
                <input type="tel" placeholder='11 1111 1111' pattern={"[0-9]{2}[0-9]{4}[0-9]{4}"} name='telefono' onChange={handlePhone} value={phone} required></input>
                <label >Correo electrónico</label>
                <input type="email" placeholder='rodriguez@gmail.com' name='mail1' onChange={handleEmail} value={email} required></input>
                <label >Vuelva a escribir su correo electrónico</label>
                <input type="email" placeholder='rodriguez@gmail.com' name='mail2' onChange={handleVerificationEmail} value={verificatioEmail} required></input>
                <button disabled={email !== verificatioEmail} style={{ backgroundColor: (email !== verificatioEmail || name ==='' || lastName==='' || adress ===''|| phone ===''|| email ==='' || verificatioEmail ==='')? 'grey':'#085cd8' }} >Finalizar compra</button>
            </form>
            <div className='contenedorProd'>
                <div className='checkoutProducts'> 
                    <h2>Resumen de la compra:</h2>
                </div>
                <div className='resumenProductos'>
                    {cart.map((prod)=>(
                        <div key={prod.id}>
                            <ul>
                                <li >{prod.title} Talle: {prod.size} x {prod.cantidad}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='contenedorPrecio'>
                    <h3>El costo total de la compra es: ${totalPrecio()}</h3>
                </div>
            </div>

            </div>
    </div>
  )
}

export default Checkout