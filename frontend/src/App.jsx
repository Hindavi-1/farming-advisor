import "./App.css";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
