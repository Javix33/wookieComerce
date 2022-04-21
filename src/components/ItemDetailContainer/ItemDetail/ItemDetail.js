import "./ItemDetail.css";
import ItemCount from "./ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail =(props)=>{
const [ProductsToCart, setProductsToCart]=useState(0);
const SetCart =(count)=>{
  setProductsToCart(count)
};

return(
      <li className="CardProductDetail">
        <h3 className="ProductNameDetail">
            {props.product.title}
          </h3>
        <div className="DetailContainer">
          <img className="ProductImageDetail" src={props.product.image} alt={props.product.title} />
          <div className="ProductDetail">
            <p className="ProductInfoDetail">
              {props.product.descripcion}
            </p>
          </div>
        </div>
        <p className="ProductInfoDetail">
          Estock disponible {props.product.stock}
        </p>
        <p className="ProductInfoDetail">
          ${props.product.price}.00
        </p>
        <ItemCount stock={props.product.stock} onAdd={SetCart}/>
        {ProductsToCart !== 0 ? <Link to="/cart" className="ButtonDetalles">Ir al carrito</Link>: null}
      </li>)
        }