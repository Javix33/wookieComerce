
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import {ItemList} from "./ItemList/ItemList.js"
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";


const ItemListContainer=(props)=>{
const [products, setProducts]=useState([]);
const{CategoryId}=useParams();



useEffect(() => {
  
  getProducts(CategoryId).then(response=>setProducts(response))
  
}, [CategoryId])
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