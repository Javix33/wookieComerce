import "./NavLink.css";
import { Link } from "react-router-dom";

const NavLink=(props)=>{

  return(
    <Link to={`/${props.category}`} className="categoria">
    {props.category}
  </Link>
  );
};

export default NavLink;