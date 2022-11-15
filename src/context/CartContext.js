import { useState, createContext } from "react";

export const CartContext = createContext();


const CartProvider = (props) => {
    const [cart,setCart]=useState([]);

    //funciones del CartContext
    //funcion que agregar productos al carrito.
    const addToCart = (item, cantidad)=>{
      if (isInCart(item.id)){
        sumarUnidades(item, cantidad);
      }
      else{
        setCart([...cart,{...item,cantidad}]);
      }  
    }

    //funcion que verifica si el elemto se encuentra ya agregado al carrito
    const isInCart=(id)=>{
        return cart.some((prod)=>prod.id===id)
    }
    console.log(cart)
    
    //funcion que suma al carrito solo las unidades cuando ya existe el item en el cart
    const sumarUnidades=(item, cantidad)=>{
      const cartActualizado=cart.map((prodDelCarrito)=>{
        if(prodDelCarrito.id===item.id)
        {
          const productoModificado = {
            ...prodDelCarrito, cantidad:cantidad,
          }
          return productoModificado;
        }
        else{
          return prodDelCarrito;
        }
      })
      setCart(cartActualizado);
    };
    

    //funcion para vaciar el carrito
    const deleteAll = ()=>{
      setCart([]);
    }
    //funcion para eliminar un producto

    //funcion para sumar el total $ del carrito

    //funcion para sumar el total de unidades del carrito (cartWidget)
    
  return (
    <CartContext.Provider value={{cart, addToCart,  deleteAll}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider