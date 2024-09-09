import "./navbar.css";
import logo from "../../pictures/logo.png";
function Navbar() {
  return (
    <>
      <ul className="navbar-list">
        <li> <img className="img-nav" src={logo} /></li>
        <li><h1 className="h1-nav"><a>AnimeApp</a></h1></li>
      </ul>
     
      
    </>
  );
}
export default Navbar;
