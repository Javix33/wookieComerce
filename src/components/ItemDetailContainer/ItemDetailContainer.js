import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import {ItemDetail} from "./ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer=(props)=>{
  const{ProductId}=useParams();
const [product, setProduct]=useState({});

useEffect(()=>{
getDoc(doc(firestoreDb, "products", ProductId)).then(
response=>{
  const product={id:response.id, ...response.data()}
    setProduct(product)
})
}, [ProductId])
  return(
    <div>
    <ul className="ProductList">
    <ItemDetail {...product}/>
    </ul>
    </div>
  )
};
export default ItemDetailContainer