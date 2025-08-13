import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaChevronUp,
  FaSeedling,
  FaTint,
  FaLeaf,
  FaHome,
  FaInfoCircle,
  FaStar,
  FaBook,
  FaEnvelope,
  FaRobot,
  FaCrop,
  FaCamera,
} from "react-icons/fa";
import { useLocation, NavLink } from "react-router-dom";
// import "./navbar.css";
import "./nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Close mobile menu when route changes
    setMenuOpen(false);
    setAdvisorOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleAdvisor = () => {
    setAdvisorOpen(!advisorOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          FarmingAI
        </NavLink>

        {/* Menu Items */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink
              to="/"
              className={isActiveLink("/") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <FaHome className="nav-icon" />
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about-us"
              className={isActiveLink("/about-us") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <FaInfoCircle className="nav-icon" />
              About Us
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/features"
              className={isActiveLink("/features") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              ai-advisor
              Features
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/smart-scanner"
              className={isActiveLink("/smart-scanner") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {/* <a href="/ai-advisor">AI Advisor</a> */}
              <FaCamera className="nav-icon" />
            Smart-Scanner
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ai-advisor"
              className={isActiveLink("/ai-advisor") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {/* <a href="/ai-advisor">AI Advisor</a> */}
              <FaRobot className="nav-icon" />
            ai-advisor
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/blogs"
              className={isActiveLink("/blogs") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <FaBook className="nav-icon" />
              Blog
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              className={isActiveLink("/contact") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <FaEnvelope className="nav-icon" />
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="nav-icons">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
