import "./NavBar.css";
import Logo from "./images/LogoPNG.png";
import NavLink from "./NavLink/NavLink.js"

const NavBar=()=>{
return(
  <nav className="NavBar">
    <img className="logo" src={Logo} alt="logotipo wookie" />
    <NavLink title="Wookies"/>
    
    <NavLink title="Mos Eisley"/>
    
    <NavLink title="Troopers"/>
    
    <NavLink title="Mandalorian"/>
  </nav>
); 
};
export default NavBar;