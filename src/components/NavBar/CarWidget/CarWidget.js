import "./CarWidget.css";
import Icon from "./IconCart.png";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CarWidget = (props) => {
  const{totalProducts}=useContext(CartContext)
  return ( 
  <Link to="/Cart" className="Cart">
    <img className = "Halcon" src = {Icon} alt = "icono de carrito, halcon milenario" 
    />
    
    <button className="Title">
      {props.title}     {totalProducts()}
    </button>
  </Link>
  );
};

export default CarWidget;