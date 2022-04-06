
import "./ItemListContainer.css";
import { getProducts } from "../asyncmok";
import { useEffect, useState } from "react";
import {ItemList} from "../ItemList/ItemList.js"


const ItemListContainer=(props)=>{
const [products, setProducts]=useState([]);

useEffect(()=>{
getProducts().then(product=>{
  setProducts(product);
})
}, [])
  return(
    <div>
      <h1 className="TitleMain">
        {props.greeting}
      </h1>
    <ul className="ProductList">
      <ItemList products={products}/>
    </ul>
    </div>
  )
};
export default ItemListContainer