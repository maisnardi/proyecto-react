import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart,setCart]=useState([]);

    const addToCart = (item, cantidad)=>{
      if (isInCart(item.id)){
        sumarUnidades(item, cantidad);
      }
      else{
        setCart([...cart,{...item,cantidad}]);
      }  
    }

    const isInCart=(id)=>{
        return cart.some((prod)=>prod.id===id)
    }
  
    
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
    


    const deleteAll = ()=>{
      setCart([]);
    }

    const deleteOne = (id)=>{
      const carritoFiltrado=cart.filter((prod)=>prod.id!==id); 
      setCart(carritoFiltrado);
    };

    const totalPrecio=()=>{
      let valor=0;
      const copiaCarrito=[...cart];
      copiaCarrito.forEach((prod)=>{
        valor  += prod.cantidad * prod.price;
      });
      return valor;
    }

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