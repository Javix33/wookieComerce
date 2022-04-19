import "./NavLink.css";
import { Link } from "react-router-dom";

const NavLink=(props)=>{

  return(
<Link to={`/${props.title}`} className="categoria">
    {props.title}
  </Link>
  );
};

export default NavLink;