import '../App.css'
import { Link,NavLink } from "react-router-dom"
const Header = () => {
const navLinkStyles =({isActive}) =>{
  return{
    textDecoration: isActive ? "none" : "underline",
    color: isActive ? "red" : "white",
    fontSize: "30px",
    justifyContent:"space-aound"
  };
};

  return (
    <div className="header1">
    <NavLink style={navLinkStyles} to={'/app'}>Home</NavLink>
    <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>
    <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>
    
    </div>

  )
}

export default Header