import "./CarWidget.css";
import Icon from "./IconCart.png";
const CarWidget = (props) => {
  return ( 
  <div className="Cart">
    <img className = "Halcon" src = {Icon} alt = "icono de carrito, halcon milenario" 
    />
    <button className="Title">
      {props.title}
    </button>
  </div>
  );
};

export default CarWidget;