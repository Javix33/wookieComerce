
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import{firestoreDb} from "../../services/firebase/index"
import { useEffect, useState } from "react";
import {ItemList} from "./ItemList/ItemList.js"
import { useParams } from "react-router-dom";


const ItemListContainer=(props)=>{
const [products, setProducts]=useState([]);
const{CategoryId}=useParams();

const collectionRef= CategoryId ? query(collection(firestoreDb, "products"), where("category", "==",  CategoryId)):collection(firestoreDb, "products")

useEffect(() => {
  
  getDocs(collectionRef).then(response=>{
    const products=response.docs.map(doc=>{
      return {id:doc.id, ...doc.data()}
      
    })
    setProducts(products)
    
  })
  
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