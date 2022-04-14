import "./ItemDetailContainer.css";
import { getProductsById } from "../asyncmok";
import { useEffect, useState } from "react";
import {ItemDetail} from "../ItemDetail/ItemDetail.js"


const ItemDetailContainer=(props)=>{
const [product, setProduct]=useState({});

useEffect(()=>{
getProductsById(props.id).then(product=>{
  setProduct(product);
})
console.log(product)
}, [])
  return(
    <div>
    <ul className="ProductList">
    <ItemDetail product={product}/>
    </ul>
    </div>
  )
};
export default ItemDetailContainer