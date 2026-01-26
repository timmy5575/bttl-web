import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/BTTL.png";
import "./navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <span>BTTL</span>
          <img src={Logo} alt="BTTL logo" />
        </div>

        <ul className={`nav-links ${showMenu ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setShowMenu(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallary" onClick={() => setShowMenu(false)}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contant" onClick={() => setShowMenu(false)}>
              Contact me
            </NavLink>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? "✖" : "☰"}
        </div>
      </nav>

      {showMenu && <div className="overlay" onClick={() => setShowMenu(false)} />}
    </>
  );
}

export default Navbar;
