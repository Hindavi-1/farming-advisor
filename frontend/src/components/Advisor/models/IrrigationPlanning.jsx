// IrrigationPlanning.jsx
import React, { useState } from "react";
import "../styles/modelStyles.css";
import {
  FaArrowLeft,
  FaTint,
  FaCloudRain,
  FaTemperatureHigh,
  FaCalendarAlt,
} from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const IrrigationPlanning = ({ onBack }) => {
  const [formData, setFormData] = useState({
    cropType: "rice",
    soilType: "loamy",
    fieldSize: 5,
    currentMoisture: 30,
    season: "summer",
    temperature: 28,
    humidity: 65,
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "fieldSize" ||
        name === "currentMoisture" ||
        name === "temperature" ||
        name === "humidity"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your ML model
    // For now, let's simulate a prediction
    setTimeout(() => {
      setPrediction({
        schedule: [
          { day: "Monday", amount: 12, duration: 45 },
          { day: "Thursday", amount: 15, duration: 55 },
          { day: "Sunday", amount: 10, duration: 35 },
        ],
        waterSavings: 28,
        totalWaterNeeded: 37,
        moistureForecast: [40, 35, 30, 45, 40, 35, 30],
        recommendations: [
          "Irrigate during early morning to reduce evaporation",
          "Consider mulching to maintain soil moisture",
          "Monitor soil moisture levels after rainfall events",
        ],
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

  // Season options
  const seasonOptions = [
    { value: "summer", label: "Summer" },
    { value: "monsoon", label: "Monsoon" },
    { value: "winter", label: "Winter" },
    { value: "spring", label: "Spring" },
  ];

  return (
    <div className="model-container">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Back to Advisors
      </button>

      <h2 className="model-title">Irrigation Planning</h2>
      <p className="model-description">
        Optimize your water usage with intelligent irrigation schedules based on
        weather forecasts and crop needs.
      </p>

      <div className="model-content">
        <div className="input-section">
          <h3>Enter Your Irrigation Parameters</h3>
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
              <label>Field Size (acres)</label>
              <input
                type="range"
                name="fieldSize"
                min="1"
                max="50"
                step="0.5"
                value={formData.fieldSize}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.fieldSize} acres</div>
            </div>

            <div className="form-group">
              <label>Current Soil Moisture (%)</label>
              <input
                type="range"
                name="currentMoisture"
                min="10"
                max="90"
                value={formData.currentMoisture}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.currentMoisture}%</div>
            </div>

            <div className="form-group">
              <label>Season</label>
              <select
                name="season"
                value={formData.season}
                onChange={handleInputChange}
                className="select-input"
              >
                {seasonOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Average Temperature (°C)</label>
              <input
                type="range"
                name="temperature"
                min="10"
                max="45"
                value={formData.temperature}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.temperature}°C</div>
            </div>

            <div className="form-group">
              <label>Average Humidity (%)</label>
              <input
                type="range"
                name="humidity"
                min="20"
                max="95"
                value={formData.humidity}
                onChange={handleInputChange}
              />
              <div className="range-value">{formData.humidity}%</div>
            </div>

            <button type="submit" className="predict-button">
              Generate Irrigation Plan
            </button>
          </form>
        </div>

        <div className="result-section">
          {prediction ? (
            <div className="prediction-result">
              <div className="prediction-header">
                <h3>Optimal Irrigation Schedule</h3>
                <div className="water-savings-badge">
                  <FaTint /> {prediction.waterSavings}% Water Savings
                </div>
              </div>

              <div className="irrigation-plan">
                <div className="water-stats">
                  <div className="water-stat-item">
                    <FaTint />
                    <div>
                      <h4>Total Weekly Water</h4>
                      <p>{prediction.totalWaterNeeded} mm</p>
                    </div>
                  </div>
                </div>

                <h4 className="schedule-heading">Weekly Schedule</h4>
                <div className="schedule-table">
                  <div className="schedule-header">
                    <div>Day</div>
                    <div>Water Amount</div>
                    <div>Duration</div>
                  </div>

                  {prediction.schedule.map((day, index) => (
                    <div key={index} className="schedule-row">
                      <div className="schedule-day">
                        <FaCalendarAlt />
                        <span>{day.day}</span>
                      </div>
                      <div className="schedule-water">
                        <span>{day.amount} mm</span>
                      </div>
                      <div className="schedule-duration">
                        <span>{day.duration} mins</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="moisture-forecast">
                  <h4>Soil Moisture Forecast</h4>
                  <div className="moisture-chart">
                    {prediction.moistureForecast.map((level, index) => (
                      <div
                        key={index}
                        className="moisture-bar"
                        style={{ height: `${level}%` }}
                        data-day={
                          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                            index
                          ]
                        }
                      >
                        <span className="moisture-percentage">{level}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="chart-labels">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day, index) => (
                        <div key={index} className="chart-day">
                          {day}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="recommendations">
                  <h4>Smart Recommendations</h4>
                  <ul className="recommendation-list">
                    {prediction.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="placeholder-result">
              <div className="animation-container">
                <div className="water-drop-animation">
                  <FaTint className="water-drop" />
                </div>
              </div>
              <h3>Your Irrigation Plan Will Appear Here</h3>
              <p>
                Fill in the parameters on the left and click "Generate
                Irrigation Plan"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IrrigationPlanning;
