import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo2.png";
import Vector from "../../img/Vector.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import footerBg from "../../img/footerBg.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container bg-[#219653] py-20">
      <div className="footer-content">
        <div className="footer-section">
          <div
            className="footer-logo-container cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} className="footer-logo" alt="" />
            <div className="footer-logo-description">
              <h3 className="footer-title">AgriConnect</h3>
              <p className="footer-subtitle">Enhancing Agriculture.</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div> {/* Divider Line */}

        <div className="footer-section">
          <ul className="footer-links">
            <li className="footer-link" onClick={() => navigate("/")}>Home</li>
            <li className="footer-link">Market</li>
            <li className="footer-link" onClick={() => navigate("/support-center")}>Support Center</li>
            <li className="footer-link" onClick={() => navigate("help")}>Help Center</li>
            <li className="footer-link" onClick={() => navigate("/partner-dispute")}>Partner Dispute</li>
            <li className="footer-link" onClick={() => navigate("faq")}>FAQs</li>
          </ul>
          <p className="footer-feedback">
            Please provide us Feedback{" "}
            <button onClick={() => navigate("/feedback")} className="footer-feedback-button">
              HERE
            </button>
          </p>
        </div>

        <div className="footer-divider"></div> {/* Divider Line */}

        <div className="footer-section">
          <h1 className="footer-social-title">Give us a follow on social media</h1>
          <div className="footer-social-icons">
            <img className="social-icon cursor-pointer" src={Vector} alt="" />
            <img className="social-icon cursor-pointer" src={Vector1} alt="" />
            <img className="social-icon cursor-pointer" src={Vector2} alt="" />
          </div>
          <p className="footer-credit">
            Credits: <strong>BOT SQUAD</strong>
          </p>
        </div>

        <div className="footer-divider"></div> {/* Divider Line */}

        <div className="footer-section">
          <img src={footerBg} className="footer-background" alt="" />
          <h1 className="footer-education-title">
            Ministry of Education's Innovation Cell (MIC)
          </h1>
        </div>
      </div>
      <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2024 AgriConnect. All rights reserved.</p>
        </div>
    </div>
    
  );
};

export default Footer;
