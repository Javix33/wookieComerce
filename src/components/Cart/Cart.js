import { useContext, useState } from "react"
import CartContext from "../Context/CartContext"
import "./Cart.css"
import CartItem from "./CartItem/CartItem"
import { Link } from "react-router-dom"
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"


const Cart=()=>{
const[orderStatus, setOrderStatus]=useState("")
const[orderId, setOrderId]=useState("")
const {cart, Total, cleanCart}=useContext(CartContext)

const placeOrder=()=>{
  const order={
    items:cart,
    buyer:{
      name:"Javier",
      phone:5538039079,
      email:"javix33@hotmail.com"
    },
    total:Total,
    date: Timestamp.fromDate(new Date())
    }
    const outOfStock=[]
    const ids= cart.map(prod=>prod.id)
    const batch=writeBatch(firestoreDb)
    const collectionRef= collection(firestoreDb, "products")
    getDocs(
      query(
        collectionRef, where(
          documentId(), "in", ids
          )
    )
    ).then(
      response=> {
        response.docs.forEach(
          doc=>{
            const dataDoc= doc.data()
            const prodStock=cart.find(prod=> prod.id ===doc.id)?.quantity
            if(dataDoc.stock>= prodStock){
              batch.update(doc.ref, {stock:dataDoc.stock-prodStock})
            }else{
              outOfStock.push({id:doc.id, dataDoc})
            }
          }
          )
        }
        ).then(()=>{
          if(outOfStock.length ===0){
            const collectionRef= collection(firestoreDb,"orders")
            return addDoc(collectionRef, order)

          }else{
            return Promise.reject({name:"sin stock", products:outOfStock})
          }
        }).then(
          ({id})=>{
            batch.commit()
            setOrderId(id)
            setOrderStatus("succesfull")
          }
        ).catch(
          error=>{
          setOrderStatus("error")
        }
        )
      }


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
    if (orderStatus==="error"){
      return <h1 className="Empty">
        no tenemos suficiente stock para completar tu orden
      </h1>
    }
    if(orderStatus==="succesfull"){
      return <h1 className="Empty">
        Tu orden ha sido procesada con exito con el número de orden: {orderId}
      </h1>
    }
    
return(
  <div>
  <ul className="CartList">
    
    {cart.map(prod=> <CartItem id={prod.id} title={prod.title} price={prod.price} quantity={prod.quantity}  key={prod.id}/>)}
    </ul>
    <p className="TotalPrice">
      Precio total ${Total}.00
    </p>
    <button className="ButtonCart" onClick={()=>{cleanCart()}}>
      Vaciar carrito
    </button>
    <button className="ButtonCart" onClick={()=>{placeOrder()}}>
      Continua con la compra
    </button>
  
  </div>
)
}

export default Cart