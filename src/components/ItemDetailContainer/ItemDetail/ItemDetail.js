import "./ItemDetail.css";
import ItemCount from "./ItemCount/ItemCount";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";


export const ItemDetail =({id, title, descripcion, stock, price, image})=>{
  
const {addItem, isInCart} = useContext(CartContext)

const SetQuantity =(count)=>{
  
  const productToAddCart= {id, title,descripcion,stock,price, image}
  addItem({...productToAddCart, quantity: count})
}
return(
      <li className="CardProductDetail">
        <h3 className="ProductNameDetail">
            {title}
          </h3>
        <div className="DetailContainer">
          <img className="ProductImageDetail" src={image} alt={title} />
          <div className="ProductDetail">
            <p className="ProductInfoDetail">
              {descripcion}
            </p>
          </div>
        </div>
        <p className="ProductInfoDetail">
          Estock disponible {stock}
        </p>
        <p className="ProductInfoDetail">
          ${price}.00
        </p>
        
        
        {isInCart(id) ? <Link to="/Cart" className="ButtonDetalles">Ir al carrito</Link>:<ItemCount stock={stock} onAdd={SetQuantity}/>}
      </li>)
        }