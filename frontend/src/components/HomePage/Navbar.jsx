import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          className="text-xl font-bold cursor-pointer"
        >
          Farming AI 🌿
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["home", "about", "features", "dashboard", "blog", "contact"].map(
            (item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                className="cursor-pointer hover:text-green-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          {["home", "about", "features", "dashboard", "blog", "contact"].map(
            (item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                className="cursor-pointer hover:text-green-500 transition"
                onClick={() => setIsMobile(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
