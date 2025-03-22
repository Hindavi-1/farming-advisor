import React from "react";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
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
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 XYZ, India</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📧 support@farmingai.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="facebook">
              F
            </a>
            <a href="#" className="twitter">
              T
            </a>
            <a href="#" className="linkedin">
              L
            </a>
            <a href="#" className="instagram">
              I
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 FarmingAI. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
