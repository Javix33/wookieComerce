import ProductCounter from "./ProductCounter/ProductCounter.js";
import "./CardProduct.css";
import ProductImage from "./ProductImage/abrax.jpg"


const CardProduct=(props)=>{
  return(
    <div className="CardProduct">
      <h1 className="ProductName">
        {props.product}
      </h1>
      <img className="ProductImage" src={ProductImage} alt="imagen del producto" />
      <ProductCounter counter="0" />
    </div>
  );
};
export default CardProduct;