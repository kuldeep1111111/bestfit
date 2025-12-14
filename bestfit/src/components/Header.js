import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">BestFit Health</div>

      <nav className="nav">
        <a href="#">Doctors</a>
        <a href="#">Services</a>
        <a href="#">Reports</a>
        <a href="#">Contact</a>
      </nav>

      <button className="btn">Book Appointment</button>
    </header>
  );
}

export default Header;