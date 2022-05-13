import CartContext from "../../Context/CartContext"
import { useContext } from "react"
import UserInfo from "./UserInfo/UserInfo"
import CartItem from "../CartItem/CartItem"

const OrderView=()=>{
    const{cart, Total}=useContext(CartContext)

    return(
        
        <div>
             
            <h3>
                  Confirma tu Orden
            </h3>
            <div>
                <h3>
                    Productos en tu carrito
                </h3>
                <ul>
                  {cart.map(prod=> <CartItem id={prod.id} title={prod.title} price={prod.price} quantity={prod.quantity}  key={prod.id}/>)}
                </ul>
                <h2>
                    Precio Total ${Total}.00
                </h2>
                <UserInfo/>
            </div>

       </div>
    )
}
export default OrderView