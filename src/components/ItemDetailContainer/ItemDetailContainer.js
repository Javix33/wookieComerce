import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import {ItemDetail} from "./ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/firebase/firestore";


const ItemDetailContainer=()=>{
  const{ProductId}=useParams();
const [product, setProduct]=useState({});

useEffect(()=>{
getProduct(ProductId).then(
response=>{
    setProduct(response)
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