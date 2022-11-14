import { useState, createContext } from "react";

export const CartContext = createContext();


const CartProvider = (props) => {
    const [cart,setCart]=useState([]);

    //funciones del CartContext
    //funcion que agregar productos al carrito.
    const addToCart = (item, cantidad)=>{
        
        setCart([...cart,{...item,cantidad}])

    }

    //funcion que verifica si el elemto se encuentra ya agregado al carrito
    const isInCart=(item)=>{
        return cart.some((prod)=>prod.id===item.id)
    }
    console.log(cart)
  return (
    <CartContext.Provider value={{cart, addToCart}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider