import { createContext, useState } from "react";

const CartContext=createContext()

export const CartContextProvider=({children})=>{
  const [cart, setCart]=useState([])
  const [Total,setTotal]=useState(0)

const addSubtotal =(prod)=>{
let TotalPrice=Total
TotalPrice+= prod.price*prod.quantity
return TotalPrice
}  
const removeItem=(id, price, quantity)=>{
  setTotal(Total - price*quantity)
  const products=cart.filter(prod=>prod.id !== id)
  setCart(products)
}

  const addItem=(productToCart)=>{
    setCart([...cart, productToCart]);
    setTotal(addSubtotal(productToCart))
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
  const cleanCart=()=>{
    setCart([])
  }
  

  return(
    <CartContext.Provider value={{cart,totalProducts,addItem,isInCart, removeItem, Total, cleanCart}}>
{children}
    </CartContext.Provider>
  )
}

export default CartContext;