import "./CardProduct/CardProduct.css";
import "./ItemListContainer.css";
import { getProducts } from "./asyncmok";
import { useEffect, useState } from "react";
import "./CardProduct/ProductCounter/ProductCounter";
import ProductCounter from "./CardProduct/ProductCounter/ProductCounter";


const ItemListContainer=(props)=>{
const [products, setProducts]=useState([]);

useEffect(()=>{
getProducts().then(product=>{
  setProducts(product);
})
}, [])
  return(
    <ul className="ProductList">
      {products.map(product=> 
      <li className="CardProduct">
        <h1 className="ProductName">
          {product.title}
        </h1>
        <p className="Details">
          Stock:{product.stock}
        </p>
        <img className="ProductImage" src={product.image} alt={product.title} />
        <p className="ProductInfo">
          {product.descripcion}
          ${product.price}.00
          </p>
          <ProductCounter stock={product.stock}/>
        </li>)}
    </ul>
  );
};
export default ItemListContainer