import CartContext from "../../Context/CartContext"
import { useContext,useState } from "react"
import UserInfo from "./UserInfo/UserInfo"
import CartItem from "../CartItem/CartItem"
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../../services/firebase" 
import "./OrderView.css"
import { Link } from "react-router-dom"

const OrderView=()=>{
    const[orderId, setOrderId]=useState("")
    const[orderStatus, setOrderStatus]=useState("")
    const{cart, Total, userData, cleanAll }=useContext(CartContext)
   
    const placeOrder=()=>{
        const order={
          items:cart,
          buyer:{
            name: userData.name,
            phone: userData.phone,
            email: userData.email
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
           
      
            if (orderStatus==="error"){
                return <h1 className="Empty">
                  Ha ocurrido un error, por favor recarga la pagina
                </h1>
              }
              if(orderStatus==="succesfull"){
                return(
                <div className="CheckOutContainer">
                    <h4 className="Empty">
                        Gracias por tu compra {userData.name} <br/>
                  
                    </h4>
                    <p className="InfoOrder">
                        Tu orden ha sido procesada con exito con el número de orden: 
                        <br/> {orderId} <br/><br/>
                        Datos de contacto <br/><br/>
                        Telefono: <br/>{userData.phone} <br/>
                        Correo electronico: <br/>{userData.email}<br/><br/>
                        Precio Total:<br/> ${Total}.00 <br/><br/>
                        Productos totales {cart.length}.
                    </p>
                    <Link to="/" className="CleanAll" onClick={()=>cleanAll()}>
                        Vuelve al inicio
                    </Link>
                </div>
                )
              }
              if(cart.length===0){
                return(
                <div>
                  <h4 className="Empty">
                    Tu carrito esta vacio          
                  </h4>
                  <Link to="/" className="CleanAll" onClick={()=>cleanAll()}>
                        Vuelve al inicio
                  </Link>
            </div>
            )
              }
    return(
        
        <div className="OrderViewContainer">
             
            <h3 className="OrderViewTitle">
                  Confirma tu Orden
            </h3>
            <div className="OrderViewCart">
                <h3 className="OrderViewCartTitle">
                    Productos en tu carrito
                </h3>
                <ul className="OrderViewCartList">
                  {cart.map(prod=> <CartItem id={prod.id} title={prod.title} price={prod.price} quantity={prod.quantity}  key={prod.id}/>)}
                </ul>
                <h2 className="OrderViewCartTotal">
                    Precio Total ${Total}.00
                </h2>
                <UserInfo terminarCompra={placeOrder}/>
            </div>
            
       </div>
    )
}
export default OrderView