import './navbar.css';
import React from 'react';
import CartWidget from '../../Cartwidget/CartWidget';

const Navbar = () => {
  return (
    <div className='contenedorNavbar'>
      <div className='contenedorBrand'>
        <h1 className='tituloPagina'>MundoRopa</h1>
      </div>
      <div className='contenedorMenu'>
        <ul>
          <li>Remeras</li>
          <li>|</li>
          <li>Pantalones</li>
          <li>|</li>
          <li>Zapatillas</li>
          <li>|</li>
          <li>Accesorios</li>
          <li>|</li>
          <li>Contacto</li>
          <li>|</li>
          <li>Mi cuenta</li>
          <CartWidget/>
        </ul>
        
      </div>
      
    </div>
  )
}

export default Navbar