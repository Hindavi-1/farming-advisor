// FertilizerOptimization.jsx
import React, { useState } from "react";
import "../styles/modelStyles.css";
import { FaArrowLeft, FaFlask, FaLeaf, FaSeedling } from "react-icons/fa";
import { GiChemicalDrop, GiSprout } from "react-icons/gi";

const FertilizerOptimization = ({ onBack }) => {
  const [formData, setFormData] = useState({
    cropType: "rice",
    soilType: "loamy",
    nitrogen: 45,
    phosphorus: 30,
    potassium: 25,
    ph: 6.5,
    electricalConductivity: 0.3,
    organicCarbon: 0.5,
    targetYield: 5,
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "cropType" || name === "soilType" ? value : parseFloat(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your ML model
    // For now, let's simulate a prediction
    setTimeout(() => {
      setPrediction({
        nitrogen: {
          recommendation: 120,
          source: "Urea",
          quantity: "260 kg/hectare",
          timing:
            "Split application: 40% at sowing, 30% at tillering, 30% at panicle initiation",
        },
        phosphorus: {
          recommendation: 60,
          source: "Single Super Phosphate (SSP)",
          quantity: "375 kg/hectare",
          timing: "Apply full dose at land preparation",
        },
        potassium: {
          recommendation: 40,
          source: "Muriate of Potash (MOP)",
          quantity: "65 kg/hectare",
          timing: "50% at sowing, 50% at flowering stage",
        },
        micronutrients: ["Zinc (5 kg/ha)", "Manganese (3 kg/ha)"],
        expectedYieldIncrease: 24,
        costBenefitRatio: 3.2,
        environmentalImpact: "Medium",
      });
    }, 1500);
  };

  // Crop type options
  const cropOptions = [
    { value: "rice", label: "Rice" },
    { value: "wheat", label: "Wheat" },
    { value: "corn", label: "Corn" },
    { value: "cotton", label: "Cotton" },
    { value: "sugarcane", label: "Sugarcane" },
  ];

  // Soil type options
  const soilOptions = [
    { value: "clay", label: "Clay" },
    { value: "sandy", label: "Sandy" },
    { value: "loamy", label: "Loamy" },
    { value: "silty", label: "Silty" },
    { value: "peaty", label: "Peaty" },
  ];

  return (
    <div className="model-container">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Back to Advisors
      </button>

      <h2 className="model-title">Fertilizer Optimization</h2>
      <p className="model-description">
        Receive precise fertilizer recommendations to maximize yield while
        minimizing costs and environmental impact.
      </p>

      <div className="model-content">
        <div className="input-section">
          <h3>Enter Your Soil & Crop Parameters</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Crop Type</label>
              <select
                name="cropType"
                value={formData.cropType}
                onChange={handleInputChange}
                className="select-input"
              >
                {cropOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Soil Type</label>
              <select
                name="soilType"
                value={formData.soilType}
                onChange={handleInputChange}
                className="select-input"
              >
                {soilOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Nitrogen (N) - kg/ha</label>
              <input
                type="range"
                name="nitrogen"
                min="10"
                max="140"
                value={formData.nitrogen}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.nitrogen}</div>
            </div>

            <div className="form-group">
              <label>Phosphorus (P) - kg/ha</label>
              <input
                type="range"
                name="phosphorus"
                min="5"
                max="100"
                value={formData.phosphorus}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.phosphorus}</div>
            </div>

            <div className="form-group">
              <label>Potassium (K) - kg/ha</label>
              <input
                type="range"
                name="potassium"
                min="5"
                max="100"
                value={formData.potassium}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.potassium}</div>
            </div>

            <div className="form-group">
              <label>pH Value</label>
              <input
                type="range"
                name="ph"
                min="3.5"
                max="9.9"
                step="0.1"
                value={formData.ph}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.ph}</div>
            </div>

            <div className="form-group">
              <label>Electrical Conductivity (dS/m)</label>
              <input
                type="range"
                name="electricalConductivity"
                min="0.1"
                max="3.0"
                step="0.1"
                value={formData.electricalConductivity}
                onChange={handleInputChange}
              />
              <div className="range-value">
                {formData.electricalConductivity}
              </div>
            </div>

            <div className="form-group">
              <label>Organic Carbon (%)</label>
              <input
                type="range"
                name="organicCarbon"
                min="0.1"
                max="2.0"
                step="0.1"
                value={formData.organicCarbon}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.organicCarbon}%</div>
            </div>

            <div className="form-group">
              <label>Target Yield (tons/ha)</label>
              <input
                type="range"
                name="targetYield"
                min="1"
                max="10"
                step="0.5"
                value={formData.targetYield}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.targetYield}</div>
            </div>

            <button type="submit" className="predict-button">
              Generate Fertilizer Recommendations
            </button>
          </form>
        </div>

        <div className="result-section">
          {prediction ? (
            <div className="prediction-result">
              <div className="prediction-header">
                <h3>Fertilizer Recommendations</h3>
                <div className="yield-increase-badge">
                  <FaSeedling /> +{prediction.expectedYieldIncrease}% Yield
                </div>
              </div>

              <div className="fertilizer-recommendations">
                <div className="key-metrics">
                  <div className="metric-item">
                    <div className="metric-value">
                      {prediction.costBenefitRatio}:1
                    </div>
                    <div className="metric-label">Cost-Benefit Ratio</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-value">
                      {prediction.environmentalImpact}
                    </div>
                    <div className="metric-label">Environmental Impact</div>
                  </div>
                </div>

                <div className="nutrient-recommendations">
                  <div
                    className="nutrient-card"
                    style={{ "--nutrient-color": "#27ae60" }}
                  >
                    <div className="nutrient-header">
                      <div className="nutrient-icon">
                        <GiChemicalDrop />
                      </div>
                      <div className="nutrient-name">Nitrogen (N)</div>
                    </div>
                    <div className="nutrient-value">
                      {prediction.nitrogen.recommendation} kg/ha
                    </div>
                    <div className="nutrient-details">
                      <div className="detail-row">
                        <span className="detail-label">Source:</span>
                        <span className="detail-value">
                          {prediction.nitrogen.source}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Quantity:</span>
                        <span className="detail-value">
                          {prediction.nitrogen.quantity}
                        </span>
                      </div>
                      <div className="detail-row timing-row">
                        <span className="detail-label">Timing:</span>
                        <span className="detail-value">
                          {prediction.nitrogen.timing}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="nutrient-card"
                    style={{ "--nutrient-color": "#2980b9" }}
                  >
                    <div className="nutrient-header">
                      <div className="nutrient-icon">
                        <GiChemicalDrop />
                      </div>
                      <div className="nutrient-name">Phosphorus (P)</div>
                    </div>
                    <div className="nutrient-value">
                      {prediction.phosphorus.recommendation} kg/ha
                    </div>
                    <div className="nutrient-details">
                      <div className="detail-row">
                        <span className="detail-label">Source:</span>
                        <span className="detail-value">
                          {prediction.phosphorus.source}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Quantity:</span>
                        <span className="detail-value">
                          {prediction.phosphorus.quantity}
                        </span>
                      </div>
                      <div className="detail-row timing-row">
                        <span className="detail-label">Timing:</span>
                        <span className="detail-value">
                          {prediction.phosphorus.timing}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="nutrient-card"
                    style={{ "--nutrient-color": "#e67e22" }}
                  >
                    <div className="nutrient-header">
                      <div className="nutrient-icon">
                        <GiChemicalDrop />
                      </div>
                      <div className="nutrient-name">Potassium (K)</div>
                    </div>
                    <div className="nutrient-value">
                      {prediction.potassium.recommendation} kg/ha
                    </div>
                    <div className="nutrient-details">
                      <div className="detail-row">
                        <span className="detail-label">Source:</span>
                        <span className="detail-value">
                          {prediction.potassium.source}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Quantity:</span>
                        <span className="detail-value">
                          {prediction.potassium.quantity}
                        </span>
                      </div>
                      <div className="detail-row timing-row">
                        <span className="detail-label">Timing:</span>
                        <span className="detail-value">
                          {prediction.potassium.timing}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="micronutrients">
                  <h4>Recommended Micronutrients</h4>
                  <div className="micronutrient-list">
                    {prediction.micronutrients.map((nutrient, index) => (
                      <div key={index} className="micronutrient-item">
                        <GiSprout className="micro-icon" />
                        <span>{nutrient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="placeholder-result">
              <div className="animation-container">
                <div className="flask-animation">
                  <FaFlask className="flask" />
                </div>
              </div>
              <h3>Your Fertilizer Recommendations Will Appear Here</h3>
              <p>
                Fill in the parameters on the left and click "Generate
                Fertilizer Recommendations"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FertilizerOptimization;
