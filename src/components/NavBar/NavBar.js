import "./NavBar.css";
import Logo from "./images/LogoPNG.png";
import NavLink from "./NavLink/NavLink.js"
import CarWidget from "./CarWidget/CarWidget.js";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import { useContext, useEffect,useState } from "react";
import { firestoreDb } from "../../services/firebase";
import { getDocs, collection } from "firebase/firestore";


const NavBar=()=>{
  const{cart}=useContext(CartContext)
  const[categories,setCategories]=useState([])
useEffect(()=>{
getDocs(collection(firestoreDb, "categories")).then(response=>{
  const categories= response.docs.map(doc=> {
    return {id:doc.id, ...doc.data()}
  })
  setCategories(categories)
})
},[])
return(
  <nav className="NavBar">
    <Link to="/" className="HomeLink">
    <img className="logo" src={Logo} alt="logotipo wookie" />
    </Link>
  {categories.map(category=> <NavLink key={category.id} category={category.descripcion}/>) }
    {cart.length !==0? <CarWidget title="Carrito" />:null}
  </nav>
); 
};
export default NavBar;