import { useContext } from "react"
import CartContext from "../Context/CartContext"
import "./Cart.css"
import CartItem from "./CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart=()=>{
  
const {cart}=useContext(CartContext)

    if(cart.length === 0){
      return(
        <div>
        <h1 className="Empty">
          El carrito esta vacio
        </h1>
        
        <Link to="/" className="Restart">
          Regresar al inicio
        </Link>
        </div>
      )
    }
    
return(
  
  <ul className="CartList">
    
    {cart.map(prod=> <CartItem id={prod.id} title={prod.title} price={prod.price} quantity={prod.quantity}  key={prod.id}/>)}
    
    <p>
      Precio total ${}.00
    </p>
  </ul>
)
}

export default Cart