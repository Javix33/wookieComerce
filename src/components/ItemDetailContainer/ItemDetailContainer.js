import "./ItemDetailContainer.css";
import { getProductsById } from "../asyncmok";
import { useEffect, useState } from "react";
import {ItemDetail} from "./ItemDetail/ItemDetail.js"
import { useParams } from "react-router-dom";


const ItemDetailContainer=(props)=>{
  const{ProductId}=useParams();
const [product, setProduct]=useState({});

useEffect(()=>{
getProductsById(ProductId).then(product=>{
  setProduct(product);
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