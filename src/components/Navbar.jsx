import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <Link to="/" className="nav-button">Home</Link>

      <Link to="/admin" className="nav-button">Admin</Link>

      <Link to="/victim" className="nav-button">Victim</Link>

      <Link to="/counsellor" className="nav-button">Counsellor</Link>

      <Link to="/legal" className="nav-button">Legal Advisor</Link>

    </nav>

  );

}

export default Navbar;