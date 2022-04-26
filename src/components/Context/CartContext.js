import { createContext, useState } from "react";

const CartContext=createContext()

export const CartContextProvider=({children})=>{
  const [cart, setCart]=useState([])
  const addItem=(productToCart)=>{
    setCart([...cart, productToCart])
  }
  const totalProducts=()=>{
    let total=0;
    cart.forEach(product=>{
      total+= product.quantity
    })
    return total
  }
  const isInCart=(id)=>{
    return cart.some(product=>product.id === id)
  }

  return(
    <CartContext.Provider value={{cart,totalProducts,addItem,isInCart}}>
{children}
    </CartContext.Provider>
  )
}

export default CartContext;