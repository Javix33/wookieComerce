import "./Item.css";
import { Link } from "react-router-dom";

export const Item =(props)=>{
return(
      <li className="CardProduct">
        <h3 className="ProductName">
          {props.title}
        </h3>
        <img className="ProductImage" src={props.image} alt={props.title} />
        <p className="ProductInfo">
          {props.descripcion}
        </p>
        <Link to={`/Tienda/${props.id}`} className="ButtonDetalles">
          Ver detalles
        </Link>
      </li>)
        }

