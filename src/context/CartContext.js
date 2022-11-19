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
    
    //funcion que verifica la cantidad de un mismo producto agregado al carrito NO BORRAR
    const iniUnidades= (producto)=>{
      if(isInCart(producto.id)){
        const copia=[...cart];
        const elementoCarro = copia.find((prod)=>prod.id===producto.id)
        const inicial=elementoCarro.cantidad;
        return inicial;
      }
      else
      return 0;
    }

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
    const deleteOne = (id)=>{
      const carritoFiltrado=cart.filter((prod)=>prod.id!==id);     //crea un nuevo array con todos los elementos menos el que tiene el mismo id.
      setCart(carritoFiltrado);
    };

    //funcion para sumar el total $ del carrito
    const totalPrecio=()=>{
      let valor=0;
      const copiaCarrito=[...cart];
      copiaCarrito.forEach((prod)=>{
        valor  += prod.cantidad * prod.price;
      });
      return valor;
    }
    //funcion para sumar el total de unidades del carrito (cartWidget)
    const totalUnidades=()=>{
      let contador=0;
      const copiaCarrito=[...cart];
      copiaCarrito.forEach((prod)=>{
        contador  += prod.cantidad;
      });
      return contador;
    }
    
      return (
    <CartContext.Provider value={{cart, addToCart,  deleteAll, isInCart,totalUnidades,totalPrecio,deleteOne,iniUnidades}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider