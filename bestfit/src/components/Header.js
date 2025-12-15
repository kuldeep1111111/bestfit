import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">DietShree</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <button className="btn">Book Appointment</button>
    </header>
  );
}

export default Header;
