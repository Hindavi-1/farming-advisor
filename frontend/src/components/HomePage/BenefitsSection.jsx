// BenefitsSection.jsx
import React from "react";
import "./styles/BenefitsSection.css";
import { FaSeedling, FaTint, FaFlask } from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <h2 className="section-title">Farming Smarter, Not Harder</h2>

        <div className="benefits-container">
          <div className="benefit-card">
            <div className="benefit-icon crop-icon">
              <FaSeedling />
            </div>
            <h3>Crop Recommendation</h3>
            <ul className="benefits-list">
              <li>
                <span className="benefit-highlight">20% higher yields</span>{" "}
                with optimal crop selection
              </li>
              <li>
                Reduce crop failure risk through data-driven variety matching
              </li>
              <li>
                Discover profitable specialty crops suited for your conditions
              </li>
              <li>
                Plan crop rotations that improve soil health year after year
              </li>
            </ul>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon water-icon">
              <FaTint />
            </div>
            <h3>Irrigation Predictor</h3>
            <ul className="benefits-list">
              <li>
                <span className="benefit-highlight">30% water savings</span>{" "}
                while maintaining optimal crop hydration
              </li>
              <li>Prevent crop stress before visible symptoms appear</li>
              <li>Schedule irrigation based on real-time weather forecasts</li>
              <li>Reduce environmental impact and water costs</li>
            </ul>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon fertilizer-icon">
              <FaFlask />
            </div>
            <h3>Fertilizer Recommendation</h3>
            <ul className="benefits-list">
              <li>Apply precisely what your crops need, when they need it</li>
              <li>
                <span className="benefit-highlight">Reduce costs by 25%</span>{" "}
                with optimized application
              </li>
              <li>Improve soil health with balanced nutrient management</li>
              <li>Minimize environmental runoff and maximize sustainability</li>
            </ul>
          </div>
        </div>

        <div className="cta-container">
          <button className="cta-button">
            Start optimizing your farm today
          </button>
          <p className="cta-subtext"></p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
