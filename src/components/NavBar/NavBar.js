import "./NavBar.css";
import Logo from "./images/LogoPNG.png";
import NavLink from "./NavLink/NavLink.js"
import CarWidget from "./CarWidget/CarWidget.js";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

const NavBar=()=>{
  const{cart}=useContext(CartContext)
return(
  <nav className="NavBar">
    <Link to="/" className="HomeLink">
    <img className="logo" src={Logo} alt="logotipo wookie" />
    </Link>
    <NavLink category="Wookies"/>
    
    <NavLink category="MosEisley"/>
    
    <NavLink category="Troopers"/>
    
    <NavLink category="Mandalorian"/>
    {cart.length !==0? <CarWidget title="Carrito" />:null}
  </nav>
); 
};
export default NavBar;