import ProductCounter from "./ProductCounter/ProductCounter.js";
import "./CardProduct.css";
import ProductImage from "./ProductImage/abrax.jpg"


const CardProduct=(props)=>{
  const addToCart=(productsToAdd)=>{
    if (productsToAdd >0){
    console.log(`Se añadieron ${productsToAdd} al carrito de compra` )
  };
};

  return(
    <div className="CardProduct">
      <h1 className="ProductName">
        {props.product}
      </h1>
      <img className="ProductImage" src={ProductImage} alt="imagen del producto" />
      <p className="ProductInfo">
        Stock disponible {props.stock} pzas.
      </p>
      <ProductCounter onAdd={addToCart} stock={props.stock} counter="0" />
    </div>
  );
};
export default CardProduct;