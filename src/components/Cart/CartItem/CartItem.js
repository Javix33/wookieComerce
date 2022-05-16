import "./CartItem.css"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const CartItem=(props)=>{
  const {removeItem}=useContext(CartContext)
  
  return(
    
    <li className="CartItemCard">
      <h1 className="CartItemTitle">
        {props.title}
      </h1>
      
      <p className="CartItemPrice">
        ${props.price}.00 c/u
      </p>
      <p className="CartItemPrice">
        Cantidad en carrito {props.quantity}
      </p>
      <p className="CartItemPrice">
        Subtotal: ${props.price*props.quantity}.00
        
      </p>
      <button className="ButtonCart" onClick={()=>{removeItem(props.id, props.price, props.quantity)}} >
        Eliminar producto
      </button>
      
      
</li>
)
}
export default CartItem