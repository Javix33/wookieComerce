import "./Item.css";
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
        <button className="ButtonDetalles">
          Ver detalles
        </button>
      </li>)
        }

