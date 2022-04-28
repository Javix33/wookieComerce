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
        precio: ${props.price}.00
      </p>
      <p className="CartItemPrice">
        Cantidad agregada al carrito {props.quantity}
      </p>
      <p className="CartItemPrice">
        Subtotal: ${props.price*props.quantity}.00
        
      </p>
      <button onClick={()=>{removeItem(props.id)}} >
        Eliminar producto
      </button>
      
      
</li>
)
}
export default CartItem