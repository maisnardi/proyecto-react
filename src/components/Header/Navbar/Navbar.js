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
          <NavLink className={'links'} to={'/category/remeras'}>Remeras</NavLink>
          <li>|</li>
          <NavLink className={'links'} to={'/category/pantalones'}>Pantalones</NavLink>
          <li>|</li>
          <NavLink className={'links'} to={'/category/zapatillas'}>Zapatillas</NavLink>
          <li>|</li>
          <NavLink className={'links'} to={'/category/accesorios'}>Accesorios</NavLink>
          <li>|</li>
          <Link className={'links'} to={'/cart'}><CartWidget/></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar