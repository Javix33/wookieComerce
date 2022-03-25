import "./NavLink.css";

const NavLink=(props)=>{

  return(
  <button className="categoria">
    {props.title}
  </button>
  );
};

export default NavLink;