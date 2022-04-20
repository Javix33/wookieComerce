
import "./ItemCategoryContainer.css";
import { getProductsByCategory } from "../asyncmok";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemListContainer/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemCategoryContainer=()=>{
const [products, setProducts]=useState([]);
const {ProductCategory}=useParams();
useEffect(()=>{
getProductsByCategory(ProductCategory).then(products=>{
  setProducts(products);
})
console.log(ProductCategory)
}, [ProductCategory])
  return(
    
      
      
    <ul className="ProductList">
      <ItemList products={products}/>
    </ul>
    
  )
};
export default ItemCategoryContainer