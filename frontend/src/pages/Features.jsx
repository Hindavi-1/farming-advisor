import React, { useState, useEffect } from "react";
import {
  FaSeedling,
  FaChartLine,
  FaCloudSun,
  FaTint,
  FaBug,
  FaRobot,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";
import "../components/Features/features.css";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const features = [
    {
      id: 0,
      title: "Crop Recommendations",
      icon: <FaSeedling />,
      description:
        "Get personalized crop recommendations based on your soil type, local climate, and market trends to maximize yield and profit.",
      details: [
        "Soil compatibility analysis for 100+ crop varieties",
        "Climate-based seasonal recommendations",
        "Market trend analysis for optimal profit margins",
        "Crop rotation suggestions for soil health",
      ],
    },
    {
      id: 1,
      title: "Growth Analytics",
      icon: <FaChartLine />,
      description:
        "Track plant growth metrics and receive detailed analytics on crop performance to identify optimization opportunities.",
      details: [
        "Real-time growth stage monitoring",
        "Comparative yield analysis",
        "Historical performance tracking",
        "Predictive harvest timing",
      ],
    },
    {
      id: 2,
      title: "Weather Integration",
      icon: <FaCloudSun />,
      description:
        "Access hyperlocal weather forecasts and receive alerts for adverse conditions that might affect your crops.",
      details: [
        "10-day detailed weather forecasts",
        "Severe weather alerts and recommendations",
        "Microclimate analysis for your specific location",
        "Historical weather pattern analysis",
      ],
    },
    {
      id: 3,
      title: "Smart Irrigation",
      icon: <FaTint />,
      description:
        "Optimize water usage with AI-driven irrigation schedules based on soil moisture, weather forecasts, and crop needs.",
      details: [
        "Water conservation recommendations",
        "Drought stress prevention",
        "Integration with smart irrigation systems",
        "Soil moisture monitoring",
      ],
    },
    {
      id: 4,
      title: "Pest & Disease Detection",
      icon: <FaBug />,
      description:
        "Early identification of potential pest and disease threats with treatment recommendations to protect your crops.",
      details: [
        "Image-based disease recognition",
        "Preventative treatment scheduling",
        "Organic and conventional solution options",
        "Risk assessment based on local outbreak data",
      ],
    },
  ];

  const additionalFeatures = [
    {
      title: "AI Assistant",
      icon: <FaRobot />,
      description:
        "24/7 virtual farming assistant to answer questions and provide guidance",
    },
    {
      title: "Mobile Access",
      icon: <FaMobileAlt />,
      description:
        "Access your farm data and recommendations anywhere with our mobile app",
    },
    {
      title: "Data Security",
      icon: <FaShieldAlt />,
      description:
        "Enterprise-grade security to protect your farm data and privacy",
    },
    {
      title: "Community Insights",
      icon: <FaUsers />,
      description:
        "Learn from other farmers in similar conditions through anonymized data sharing",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(
        ".feature-section, .secondary-features, .pricing-section"
      )
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="features-container">
      <div className="features-header">
        <h1>
          Powerful <span className="highlight-text">Features</span>
        </h1>
        <p className="features-subtitle">
          Discover how our AI-powered platform can transform your farming
          operations
        </p>
      </div>

      <div className="main-features" id="main-features">
        {/* Feature Selector */}
        <div className="feature-selector">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-tab ${
                activeFeature === feature.id ? "active" : ""
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className="feature-tab-icon">{feature.icon}</div>
              <span>{feature.title}</span>
            </div>
          ))}
        </div>

        {/* Feature Details */}
        <div className="feature-details">
          <div className="feature-info">
            <h2>{features[activeFeature].title}</h2>
            <p>{features[activeFeature].description}</p>
            <ul className="feature-list">
              {features[activeFeature].details.map((detail, index) => (
                <li key={index}>
                  <FaChevronRight className="list-icon" />
                  {detail}
                </li>
              ))}
            </ul>
            <button className="try-feature-btn">Try This Feature</button>
          </div>
          <div className="feature-visual">
            <div className="feature-image">
              {/* Placeholder for feature image */}
              <div className="feature-icon-large">
                {features[activeFeature].icon}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="secondary-features"
        className={`secondary-features ${
          isVisible["secondary-features"] ? "visible" : ""
        }`}
      >
        <h2>Additional Capabilities</h2>
        <div className="additional-grid">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="additional-card">
              <div className="additional-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="pricing-section"
        className={`pricing-section ${
          isVisible["pricing-section"] ? "visible" : ""
        }`}
      >
        <h2>Choose Your Plan</h2>
        <p className="pricing-intro">
          Select the package that best fits your farming needs and scale
        </p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Basic</h3>
              <div className="price">
                <span className="amount">$9</span>
                <span className="period">/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <FaChevronRight className="list-icon" />
                  Crop recommendations
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Basic weather forecasts
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Single farm management
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Email support
                </li>
              </ul>
            </div>
            <button className="pricing-btn">Get Started</button>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Professional</h3>
              <div className="price">
                <span className="amount">$29</span>
                <span className="period">/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <FaChevronRight className="list-icon" />
                  All Basic features
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Advanced analytics
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Pest & disease detection
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Smart irrigation planning
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Priority support
                </li>
              </ul>
            </div>
            <button className="pricing-btn featured-btn">Get Started</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">$99</span>
                <span className="period">/month</span>
              </div>
            </div>
            <div className="pricing-features">
              <ul>
                <li>
                  <FaChevronRight className="list-icon" />
                  All Professional features
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Multiple farm management
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  API integration
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  Custom AI models
                </li>
                <li>
                  <FaChevronRight className="list-icon" />
                  24/7 dedicated support
                </li>
              </ul>
            </div>
            <button className="pricing-btn">Contact Sales</button>
          </div>
        </div>
      </div>

      <div className="features-cta">
        <h2>Ready to transform your farming approach?</h2>
        <p>Join thousands of farmers already using our AI-powered platform</p>
        <button className="cta-button">Start Your Free Trial</button>
      </div>
    </div>
  );
};

export default Features;
