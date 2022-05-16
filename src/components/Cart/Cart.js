import { useContext } from "react"
import CartContext from "../Context/CartContext"
import "./Cart.css"
import CartItem from "./CartItem/CartItem"
import { Link } from "react-router-dom"



const Cart=()=>{


const {cart, Total, cleanCart}=useContext(CartContext)



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
  <div className="CartContainer">
  <ul className="CartList">
    
    {cart.map(prod=> <CartItem id={prod.id} title={prod.title} price={prod.price} quantity={prod.quantity}  key={prod.id}/>)}
    </ul>
    <p className="TotalPrice">
      Precio total ${Total}.00
    </p>
    <button className="ButtonCart" onClick={()=>{cleanCart()}}>
      Vaciar carrito
    </button>
    <Link to="/Check_out" className="ButtonCart">
    Continua con la compra
    </Link>
   
  
  </div>
)
}

export default Cart