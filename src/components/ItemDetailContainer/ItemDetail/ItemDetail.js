import "./ItemDetail.css";
export const ItemDetail =(props)=>{
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
          ${props.product.price}.00
        </p>
        <button className="ButtonDetalles">
          Añadir al carrito
        </button>
      </li>)
        }