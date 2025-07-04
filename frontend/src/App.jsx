import "./App.css";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
import AIAdvisor from "./pages/AIAdvisor";
import Blog from "./pages/Blog";
import SmartScanner from "./pages/SmartScanner";

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
          <Route path="/ai-advisor" element={<AIAdvisor />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/smart-scanner" element={<SmartScanner />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
