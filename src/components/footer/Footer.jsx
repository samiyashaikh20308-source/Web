import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>BusinessPro</h3>
          <p>
            We provide innovative business solutions to help companies grow,
            improve productivity, and achieve success.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Business Consulting</li>
            <li>Project Management</li>
            <li>Marketing Solutions</li>
            <li>Financial Planning</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍 Kolhapur, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ info@businesspro.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BusinessPro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;