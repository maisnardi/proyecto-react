import './navbar.css';
import React from 'react';
import CartWidget from '../../Cartwidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='contenedorNavbar'>
      <div className='contenedorBrand'>
        <Link to={'/'}><h1 className='tituloPagina'>MundoRopa</h1></Link>
      </div>
      <div className='contenedorMenu'>
        <ul>
          <NavLink to={'/category/remeras'}>Remeras</NavLink>
          <li>|</li>
          <NavLink to={'/category/pantalones'}>Pantalones</NavLink>
          <li>|</li>
          <NavLink to={'/category/zapatillas'}>Zapatillas</NavLink>
          <li>|</li>
          <NavLink to={'/category/accesorios'}>Accesorios</NavLink>
          <li>|</li>
          <NavLink>Contacto</NavLink>
          <li>|</li>
          <NavLink>Mi cuenta</NavLink>
          <CartWidget/>
        </ul>
        
      </div>
      
    </div>
  )
}

export default Navbar