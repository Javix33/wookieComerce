import "./CarWidget.css";
import Icon from "./IconCart.png";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CarWidget = (props) => {
  const{totalProducts}=useContext(CartContext)
  return ( 
  <div className="Cart">
    <img className = "Halcon" src = {Icon} alt = "icono de carrito, halcon milenario" 
    />
    
    <button className="Title">
      {props.title}     {totalProducts()}
    </button>
  </div>
  );
};

export default CarWidget;