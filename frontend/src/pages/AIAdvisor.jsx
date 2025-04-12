// AIAdvisor.jsx
import React, { useState } from "react";
import "../components/Advisor/styles/AIAdvisor.css";
import { FaSeedling, FaTint, FaFlask } from "react-icons/fa";
import CropRecommendation from "../components/Advisor/models/CropRecommendation";
import IrrigationPlanning from "../components/Advisor/models/IrrigationPlanning";
import FertilizerOptimization from "../components/Advisor/models/FertilizerOptimization";

const AIAdvisor = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    {
      id: "crop",
      title: "Crop Recommendation",
      icon: <FaSeedling />,
      description:
        "Get AI-powered suggestions for the best crops based on your soil and climate conditions.",
      color: "#00c853",
    },
    {
      id: "irrigation",
      title: "Irrigation Planning",
      icon: <FaTint />,
      description:
        "Optimize your water usage with intelligent irrigation schedules based on weather forecasts.",
      color: "#2196f3",
    },
    {
      id: "fertilizer",
      title: "Fertilizer Optimization",
      icon: <FaFlask />,
      description:
        "Receive precise fertilizer recommendations to maximize yield while minimizing costs.",
      color: "#ff9800",
    },
  ];

  const renderModelSelector = () => (
    <div className="model-selection-container">
      <h2 className="selection-title">
        Select Your <span className="gradient-text">AI Advisor</span>
      </h2>
      <p className="selection-subtitle">
        Choose a prediction model to get started with personalized
        recommendations
      </p>

      <div className="model-cards">
        {models.map((model) => (
          <div
            key={model.id}
            className="model-card"
            onClick={() => setSelectedModel(model.id)}
            style={{ "--card-accent-color": model.color }}
          >
            <div className="model-icon">{model.icon}</div>
            <h3>{model.title}</h3>
            <p>{model.description}</p>
            <button className="select-model-btn">
              Get Started
              <span className="button-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case "crop":
        return <CropRecommendation onBack={() => setSelectedModel(null)} />;
      case "irrigation":
        return <IrrigationPlanning onBack={() => setSelectedModel(null)} />;
      case "fertilizer":
        return <FertilizerOptimization onBack={() => setSelectedModel(null)} />;
      default:
        return renderModelSelector();
    }
  };

  return (
    <section className="ai-advisor-section">
      <div className="ai-scanner-overlay">
        <div className="scanner-line"></div>
      </div>
      {renderSelectedModel()}
    </section>
  );
};

export default AIAdvisor;
