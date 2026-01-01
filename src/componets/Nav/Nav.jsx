import { NavLink } from "react-router-dom";
import "./Nav.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `navbar__link ${isActive ? "navbar__link_active" : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/rentals"
        className={({ isActive }) =>
          `navbar__link ${isActive ? "navbar__link_active" : ""}`
        }
      >
        Rentals
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `navbar__link ${isActive ? "navbar__link_active" : ""}`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `navbar__link ${isActive ? "navbar__link_active" : ""}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
