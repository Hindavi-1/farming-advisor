import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import "./styles/navbar.css"; // Importing the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">FarmingAI</h1>

        {/* Menu Items */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="nav-icons">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaMoon,
//   FaSun,
//   FaSeedling,
//   FaLeaf,
// } from "react-icons/fa";
// import "./styles/navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");

//   useEffect(() => {
//     document.body.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const handleNavClick = (link) => {
//     setActiveLink(link);
//     setMenuOpen(false);
//   };

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">
//         <div className="logo-container">
//           <FaSeedling className="logo-icon" />
//           <h1 className="logo">
//             Farming<span className="highlight">AI</span>
//           </h1>
//         </div>

//         <ul className={menuOpen ? "nav-links open" : "nav-links"}>
//           {[
//             { id: "home", label: "Home" },
//             { id: "about", label: "About Us" },
//             { id: "features", label: "Features" },
//             { id: "dashboard", label: "Dashboard" },
//             { id: "blog", label: "Blog" },
//             { id: "contact", label: "Contact" },
//           ].map((item) => (
//             <li
//               key={item.id}
//               className={activeLink === item.id ? "active" : ""}
//             >
//               <a
//                 href={`#${item.id}`}
//                 onClick={() => handleNavClick(item.id)}
//                 className="nav-link"
//               >
//                 {item.label}
//                 <span className="link-indicator"></span>
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="nav-right">
//           <button
//             className="theme-toggle"
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//           >
//             <div className="toggle-track">
//               <div className={`toggle-thumb ${theme === "dark" ? "dark" : ""}`}>
//                 {theme === "light" ? <FaSun /> : <FaMoon />}
//               </div>
//             </div>
//           </button>

//           <button
//             className="menu-toggle"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };
