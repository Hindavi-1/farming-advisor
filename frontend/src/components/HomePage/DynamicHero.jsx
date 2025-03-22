import React, { useEffect, useState } from "react";
import "./styles/dynamicHero.css";
import farmImage from "../../assets/image.png"; // Your farm image
import {
  FaLeaf,
  FaCloudSun,
  FaTint,
  FaTemperatureHigh,
  FaSeedling,
} from "react-icons/fa";

const DynamicHero = () => {
  const [animate, setAnimate] = useState(false);
  const [dataPoint, setDataPoint] = useState(0);
  const dataPoints = [
    { icon: <FaLeaf />, label: "Crop Health", value: "92%" },
    { icon: <FaCloudSun />, label: "Sunlight", value: "6.3 hrs" },
    { icon: <FaTint />, label: "Soil Moisture", value: "28%" },
    { icon: <FaTemperatureHigh />, label: "Temperature", value: "24°C" },
    { icon: <FaSeedling />, label: "Growth Rate", value: "+12%" },
  ];

  useEffect(() => {
    // Start animations after component mounts
    setAnimate(true);

    // Cycle through data points
    const interval = setInterval(() => {
      setDataPoint((prevPoint) => (prevPoint + 1) % dataPoints.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dynamic-hero" id="home">
      <div className="ai-scanner-overlay">
        <div className="scanner-line"></div>
      </div>

      <div className="hero-content">
        <h1 className={animate ? "animate-title" : ""}>
          Smart Farming with <span className="gradient-text">AI</span>
        </h1>
        <p className={animate ? "animate-subtitle" : ""}>
          Revolutionize your agricultural practices with data-driven insights
          and AI-powered recommendations.
        </p>

        <div className="hero-stats">
          <div className="stat-card active">
            {dataPoints[dataPoint].icon}
            <div className="stat-info">
              <h3>{dataPoints[dataPoint].label}</h3>
              <span className="stat-value">{dataPoints[dataPoint].value}</span>
            </div>
          </div>
        </div>

        <button className="cta-button">
          Start Your AI Farm Advisor
          <span className="button-arrow">→</span>
        </button>
      </div>

      <div className="hero-visual">
        <div className="farm-image-container">
          <img
            src={farmImage}
            alt="Smart Farm Visualization"
            className="farm-image"
          />

          <div className="data-points">
            {dataPoints.map((point, index) => (
              <div
                key={index}
                className={`data-point ${index === dataPoint ? "active" : ""}`}
                style={{
                  top: `${20 + Math.sin(index * 1.5) * 30}%`,
                  left: `${20 + Math.cos(index * 1.5) * 30}%`,
                }}
              >
                <div className="data-icon">{point.icon}</div>
                <div className="data-label">
                  <span className="label-text">{point.label}</span>
                  <span className="data-value">{point.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hexagon-grid">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="hexagon"
                style={{
                  top: `${10 + Math.sin(i * 0.7) * 60}%`,
                  left: `${10 + Math.cos(i * 0.7) * 40}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;
