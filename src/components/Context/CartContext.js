import { createContext, useState } from "react";

const CartContext=createContext()

export const CartContextProvider=({children})=>{
  const [cart, setCart]=useState([])
  console.log(...cart)
  const [Total,setTotal]=useState(0)

  
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
  const removeItem=(id)=>{
    const products=cart.filter(prod=>prod.id !== id)
    setCart(products)
  }

  return(
    <CartContext.Provider value={{cart,totalProducts,addItem,isInCart, removeItem}}>
{children}
    </CartContext.Provider>
  )
}

export default CartContext;