// // IrrigationPlanning.jsx
// import React, { useState } from "react";
// import "../styles/modelStyles.css";
// import {
//   FaArrowLeft,
//   FaTint,
//   FaCloudRain,
//   FaTemperatureHigh,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import { WiHumidity } from "react-icons/wi";

// const IrrigationPlanning = ({ onBack }) => {
//   const [formData, setFormData] = useState({
//     cropType: "rice",
//     soilType: "loamy",
//     fieldSize: 5,
//     currentMoisture: 30,
//     season: "summer",
//     temperature: 28,
//     humidity: 65,
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]:
//         name === "fieldSize" ||
//         name === "currentMoisture" ||
//         name === "temperature" ||
//         name === "humidity"
//           ? parseFloat(value)
//           : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would normally send the data to your ML model
//     // For now, let's simulate a prediction
//     setTimeout(() => {
//       setPrediction({
//         schedule: [
//           { day: "Monday", amount: 12, duration: 45 },
//           { day: "Thursday", amount: 15, duration: 55 },
//           { day: "Sunday", amount: 10, duration: 35 },
//         ],
//         waterSavings: 28,
//         totalWaterNeeded: 37,
//         moistureForecast: [40, 35, 30, 45, 40, 35, 30],
//         recommendations: [
//           "Irrigate during early morning to reduce evaporation",
//           "Consider mulching to maintain soil moisture",
//           "Monitor soil moisture levels after rainfall events",
//         ],
//       });
//     }, 1500);
//   };

//   // Crop type options
//   const cropOptions = [
//     { value: "rice", label: "Rice" },
//     { value: "wheat", label: "Wheat" },
//     { value: "corn", label: "Corn" },
//     { value: "cotton", label: "Cotton" },
//     { value: "sugarcane", label: "Sugarcane" },
//   ];

//   // Soil type options
//   const soilOptions = [
//     { value: "clay", label: "Clay" },
//     { value: "sandy", label: "Sandy" },
//     { value: "loamy", label: "Loamy" },
//     { value: "silty", label: "Silty" },
//     { value: "peaty", label: "Peaty" },
//   ];

//   // Season options
//   const seasonOptions = [
//     { value: "summer", label: "Summer" },
//     { value: "monsoon", label: "Monsoon" },
//     { value: "winter", label: "Winter" },
//     { value: "spring", label: "Spring" },
//   ];

//   return (
//     <div className="model-container">
//       <button className="back-button" onClick={onBack}>
//         <FaArrowLeft /> Back to Advisors
//       </button>

//       <h2 className="model-title">Irrigation Planning</h2>
//       <p className="model-description">
//         Optimize your water usage with intelligent irrigation schedules based on
//         weather forecasts and crop needs.
//       </p>

//       <div className="model-content">
//         <div className="input-section">
//           <h3>Enter Your Irrigation Parameters</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Crop Type</label>
//               <select
//                 name="cropType"
//                 value={formData.cropType}
//                 onChange={handleInputChange}
//                 className="select-input"
//               >
//                 {cropOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Soil Type</label>
//               <select
//                 name="soilType"
//                 value={formData.soilType}
//                 onChange={handleInputChange}
//                 className="select-input"
//               >
//                 {soilOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Field Size (acres)</label>
//               <input
//                 type="range"
//                 name="fieldSize"
//                 min="1"
//                 max="50"
//                 step="0.5"
//                 value={formData.fieldSize}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.fieldSize} acres</div>
//             </div>

//             <div className="form-group">
//               <label>Current Soil Moisture (%)</label>
//               <input
//                 type="range"
//                 name="currentMoisture"
//                 min="10"
//                 max="90"
//                 value={formData.currentMoisture}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.currentMoisture}%</div>
//             </div>

//             <div className="form-group">
//               <label>Season</label>
//               <select
//                 name="season"
//                 value={formData.season}
//                 onChange={handleInputChange}
//                 className="select-input"
//               >
//                 {seasonOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Average Temperature (°C)</label>
//               <input
//                 type="range"
//                 name="temperature"
//                 min="10"
//                 max="45"
//                 value={formData.temperature}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.temperature}°C</div>
//             </div>

//             <div className="form-group">
//               <label>Average Humidity (%)</label>
//               <input
//                 type="range"
//                 name="humidity"
//                 min="20"
//                 max="95"
//                 value={formData.humidity}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.humidity}%</div>
//             </div>

//             <button type="submit" className="predict-button">
//               Generate Irrigation Plan
//             </button>
//           </form>
//         </div>

//         <div className="result-section">
//           {prediction ? (
//             <div className="prediction-result">
//               <div className="prediction-header">
//                 <h3>Optimal Irrigation Schedule</h3>
//                 <div className="water-savings-badge">
//                   <FaTint /> {prediction.waterSavings}% Water Savings
//                 </div>
//               </div>

//               <div className="irrigation-plan">
//                 <div className="water-stats">
//                   <div className="water-stat-item">
//                     <FaTint />
//                     <div>
//                       <h4>Total Weekly Water</h4>
//                       <p>{prediction.totalWaterNeeded} mm</p>
//                     </div>
//                   </div>
//                 </div>

//                 <h4 className="schedule-heading">Weekly Schedule</h4>
//                 <div className="schedule-table">
//                   <div className="schedule-header">
//                     <div>Day</div>
//                     <div>Water Amount</div>
//                     <div>Duration</div>
//                   </div>

//                   {prediction.schedule.map((day, index) => (
//                     <div key={index} className="schedule-row">
//                       <div className="schedule-day">
//                         <FaCalendarAlt />
//                         <span>{day.day}</span>
//                       </div>
//                       <div className="schedule-water">
//                         <span>{day.amount} mm</span>
//                       </div>
//                       <div className="schedule-duration">
//                         <span>{day.duration} mins</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="moisture-forecast">
//                   <h4>Soil Moisture Forecast</h4>
//                   <div className="moisture-chart">
//                     {prediction.moistureForecast.map((level, index) => (
//                       <div
//                         key={index}
//                         className="moisture-bar"
//                         style={{ height: `${level}%` }}
//                         data-day={
//                           ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
//                             index
//                           ]
//                         }
//                       >
//                         <span className="moisture-percentage">{level}%</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="chart-labels">
//                     {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
//                       (day, index) => (
//                         <div key={index} className="chart-day">
//                           {day}
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 <div className="recommendations">
//                   <h4>Smart Recommendations</h4>
//                   <ul className="recommendation-list">
//                     {prediction.recommendations.map((rec, index) => (
//                       <li key={index}>{rec}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="placeholder-result">
//               <div className="animation-container">
//                 <div className="water-drop-animation">
//                   <FaTint className="water-drop" />
//                 </div>
//               </div>
//               <h3>Your Irrigation Plan Will Appear Here</h3>
//               <p>
//                 Fill in the parameters on the left and click "Generate
//                 Irrigation Plan"
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IrrigationPlanning;

import React, { useState, useEffect } from "react";
import "../styles/irrigationStyles.css";
import {
  FaArrowLeft,
  FaTint,
  FaCloudRain,
  FaTemperatureHigh,
  FaCalendarAlt,
  FaSeedling,
  FaWater,
  FaChartLine,
  FaLightbulb,
  FaSpinner
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5003/api/predict-irrigation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setPrediction(data.prediction);
      } else {
        setError(data.error || 'Failed to get prediction');
      }
    } catch (err) {
      setError('Failed to connect to server. Please ensure the Flask backend is running.');
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch weather data on component mount
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/weather-data');
        const data = await response.json();
        
        if (data.success) {
          setFormData(prev => ({
            ...prev,
            temperature: Math.round(data.data.temperature),
            humidity: Math.round(data.data.humidity)
          }));
        }
      } catch (err) {
        console.log('Weather data not available:', err);
      }
    };

    fetchWeatherData();
  }, []);

  // Crop type options with better descriptions
  const cropOptions = [
    { value: "rice", label: "Rice", icon: "🌾", waterNeed: "High" },
    { value: "wheat", label: "Wheat", icon: "🌾", waterNeed: "Medium" },
    { value: "corn", label: "Corn", icon: "🌽", waterNeed: "Medium-High" },
    { value: "cotton", label: "Cotton", icon: "🌱", waterNeed: "Medium" },
    { value: "sugarcane", label: "Sugarcane", icon: "🎋", waterNeed: "Very High" },
  ];

  // Soil type options with characteristics
  const soilOptions = [
    { value: "clay", label: "Clay", retention: "High", drainage: "Poor" },
    { value: "sandy", label: "Sandy", retention: "Low", drainage: "Excellent" },
    { value: "loamy", label: "Loamy", retention: "Good", drainage: "Good" },
    { value: "silty", label: "Silty", retention: "Good", drainage: "Moderate" },
    { value: "peaty", label: "Peaty", retention: "Very High", drainage: "Poor" },
  ];

  // Season options
  const seasonOptions = [
    { value: "summer", label: "Summer", temp: "High", evaporation: "High" },
    { value: "monsoon", label: "Monsoon", temp: "Moderate", evaporation: "Low" },
    { value: "winter", label: "Winter", temp: "Low", evaporation: "Low" },
    { value: "spring", label: "Spring", temp: "Moderate", evaporation: "Moderate" },
  ];

  const getMoistureColor = (moisture) => {
    if (moisture < 30) return "#e74c3c";
    if (moisture < 50) return "#f39c12";
    if (moisture < 70) return "#f1c40f";
    return "#27ae60";
  };

  return (
    <div className="irrigation-container">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Back to Advisors
      </button>

      <div className="irrigation-header">
        <h2 className="irrigation-title">
          <FaTint className="title-icon" />
          Smart Irrigation Planning
        </h2>
        <p className="irrigation-description">
          AI-powered irrigation optimization based on real-time data, crop requirements, 
          and environmental conditions to maximize water efficiency and crop yield.
        </p>
      </div>

      <div className="irrigation-content">
        <div className="input-section">
          <h3>
            <FaSeedling />
            Configure Your Field Parameters
          </h3>
          
          <form onSubmit={handleSubmit}>
            {/* Crop Selection */}
            <div className="form-group enhanced">
              <label>Crop Type</label>
              <div className="select-wrapper">
                <select
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleInputChange}
                  className="enhanced-select"
                >
                  {cropOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.icon} {option.label} - {option.waterNeed} Water Need
                    </option>
                  ))}
                </select>
                <div className="field-info">
                  Water requirement varies by crop type and growth stage
                </div>
              </div>
            </div>

            {/* Soil Type */}
            <div className="form-group enhanced">
              <label>Soil Type</label>
              <div className="select-wrapper">
                <select
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleInputChange}
                  className="enhanced-select"
                >
                  {soilOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} - {option.retention} Retention, {option.drainage} Drainage
                    </option>
                  ))}
                </select>
                <div className="field-info">
                  Soil characteristics affect water retention and drainage
                </div>
              </div>
            </div>

            {/* Field Size */}
            <div className="form-group enhanced">
              <label>Field Size (acres)</label>
              <div className="range-group">
                <input
                  type="range"
                  name="fieldSize"
                  min="1"
                  max="50"
                  step="0.5"
                  value={formData.fieldSize}
                  onChange={handleInputChange}
                  className="enhanced-range"
                />
                <div className="range-value highlighted">
                  {formData.fieldSize} acres
                </div>
              </div>
            </div>

            {/* Current Soil Moisture */}
            <div className="form-group enhanced">
              <label>Current Soil Moisture (%)</label>
              <div className="range-group">
                <input
                  type="range"
                  name="currentMoisture"
                  min="10"
                  max="90"
                  value={formData.currentMoisture}
                  onChange={handleInputChange}
                  className="enhanced-range"
                  style={{
                    '--thumb-color': getMoistureColor(formData.currentMoisture)
                  }}
                />
                <div 
                  className="range-value highlighted"
                  style={{ color: getMoistureColor(formData.currentMoisture) }}
                >
                  {formData.currentMoisture}%
                  <span className="moisture-status">
                    {formData.currentMoisture < 30 ? ' - Dry' : 
                     formData.currentMoisture < 50 ? ' - Low' :
                     formData.currentMoisture < 70 ? ' - Moderate' : ' - Good'}
                  </span>
                </div>
              </div>
            </div>

            {/* Season */}
            <div className="form-group enhanced">
              <label>Season</label>
              <div className="select-wrapper">
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleInputChange}
                  className="enhanced-select"
                >
                  {seasonOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} - {option.temp} Temp, {option.evaporation} Evaporation
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Environmental Parameters */}
            <div className="environmental-params">
              <h4>
                <WiHumidity />
                Environmental Conditions
              </h4>
              
              <div className="param-row">
                <div className="form-group enhanced half">
                  <label>
                    <FaTemperatureHigh />
                    Temperature (°C)
                  </label>
                  <div className="range-group">
                    <input
                      type="range"
                      name="temperature"
                      min="10"
                      max="45"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      className="enhanced-range"
                    />
                    <div className="range-value">{formData.temperature}°C</div>
                  </div>
                </div>

                <div className="form-group enhanced half">
                  <label>
                    <WiHumidity />
                    Humidity (%)
                  </label>
                  <div className="range-group">
                    <input
                      type="range"
                      name="humidity"
                      min="20"
                      max="95"
                      value={formData.humidity}
                      onChange={handleInputChange}
                      className="enhanced-range"
                    />
                    <div className="range-value">{formData.humidity}%</div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="predict-button enhanced"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FaSpinner className="spinning" />
                  Analyzing Data...
                </>
              ) : (
                <>
                  <FaChartLine />
                  Generate Smart Irrigation Plan
                </>
              )}
            </button>
          </form>
        </div>

        <div className="result-section">
          {error && (
            <div className="error-message">
              <h3>⚠️ Error</h3>
              <p>{error}</p>
              <div className="error-help">
                <strong>Troubleshooting:</strong>
                <ul>
                  <li>Make sure the Flask backend is running on port 5000</li>
                  <li>Check if the model file 'irrigation_model.pkl' exists</li>
                  <li>Verify your internet connection</li>
                </ul>
              </div>
            </div>
          )}

          {loading && (
            <div className="loading-result">
              <div className="loading-animation">
                <FaSpinner className="spinning large" />
              </div>
              <h3>Analyzing Your Field Conditions</h3>
              <p>Our AI is processing weather data, soil conditions, and crop requirements...</p>
            </div>
          )}

          {prediction && !loading && (
            <div className="prediction-result enhanced">
              {/* Header with ML confidence */}
              <div className="prediction-header enhanced">
                <h3>
                  <FaTint />
                  Optimized Irrigation Plan
                </h3>
                <div className="badges">
                  <div className="confidence-badge">
                    <FaChartLine />
                    AI Confidence: {Math.round(prediction.confidence * 100)}%
                  </div>
                  <div className="water-savings-badge">
                    <FaTint />
                    {prediction.waterSavings}% Water Savings
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="key-metrics">
                <div className="metric-card">
                  <FaWater className="metric-icon" />
                  <div className="metric-content">
                    <h4>Weekly Water Need</h4>
                    <p className="metric-value">{prediction.totalWaterNeeded} mm</p>
                    <span className="metric-detail">
                      {(prediction.totalWaterNeeded * formData.fieldSize).toFixed(1)}L total
                    </span>
                  </div>
                </div>
                
                <div className="metric-card">
                  <FaCalendarAlt className="metric-icon" />
                  <div className="metric-content">
                    <h4>Daily Requirement</h4>
                    <p className="metric-value">{prediction.dailyWaterNeed} mm</p>
                    <span className="metric-detail">Per day average</span>
                  </div>
                </div>

                <div className="metric-card">
                  <FaSeedling className="metric-icon" />
                  <div className="metric-content">
                    <h4>ML Prediction</h4>
                    <p className="metric-value status-indicator">
                      <span className={`status-badge ${prediction.ml_prediction?.toLowerCase()}`}>
                        {prediction.ml_prediction || 'ANALYZE'}
                      </span>
                    </p>
                    <span className="metric-detail">Irrigation status</span>
                  </div>
                </div>
              </div>

              {/* Irrigation Schedule */}
              <div className="irrigation-plan enhanced">
                <h4 className="section-heading">
                  <FaCalendarAlt />
                  Weekly Irrigation Schedule
                </h4>
                
                <div className="schedule-grid">
                  {prediction.schedule.map((day, index) => (
                    <div key={index} className="schedule-card">
                      <div className="schedule-day">{day.day}</div>
                      <div className="schedule-amount">
                        <FaTint />
                        {day.amount} mm
                      </div>
                      <div className="schedule-duration">
                        ⏱️ {day.duration} mins
                      </div>
                      <div className="optimal-time">
                        🌅 6:00-8:00 AM
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moisture Forecast */}
              <div className="moisture-forecast enhanced">
                <h4 className="section-heading">
                  <WiHumidity />
                  7-Day Soil Moisture Forecast
                </h4>
                
                <div className="moisture-chart">
                  {prediction.moistureForecast.map((level, index) => (
                    <div
                      key={index}
                      className="moisture-bar"
                      style={{ 
                        height: `${Math.max(level, 5)}%`,
                        backgroundColor: getMoistureColor(level),
                        '--bar-index': index
                      }}
                    >
                      <span className="moisture-percentage">{level}%</span>
                    </div>
                  ))}
                </div>
                
                <div className="chart-labels">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <div key={index} className="chart-day">{day}</div>
                  ))}
                </div>
              </div>

              {/* Smart Recommendations */}
              <div className="recommendations enhanced">
                <h4 className="section-heading">
                  <FaLightbulb />
                  AI Recommendations
                </h4>
                <div className="recommendation-grid">
                  {prediction.recommendations.map((rec, index) => (
                    <div key={index} className="recommendation-card">
                      <FaLightbulb className="rec-icon" />
                      <p>{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NPK Information */}
              {prediction.npkValues && (
                <div className="npk-info">
                  <h4 className="section-heading">Nutrient Information</h4>
                  <div className="npk-values">
                    <div className="nutrient-item">
                      <span className="nutrient-label">Nitrogen (N)</span>
                      <span className="nutrient-value">{prediction.npkValues.N} kg/ha</span>
                    </div>
                    <div className="nutrient-item">
                      <span className="nutrient-label">Phosphorus (P)</span>
                      <span className="nutrient-value">{prediction.npkValues.P} kg/ha</span>
                    </div>
                    <div className="nutrient-item">
                      <span className="nutrient-label">Potassium (K)</span>
                      <span className="nutrient-value">{prediction.npkValues.K} kg/ha</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!prediction && !loading && !error && (
            <div className="placeholder-result enhanced">
              <div className="animation-container">
                <div className="water-drop-animation">
                  <FaTint className="water-drop pulsing" />
                </div>
              </div>
              <h3>Smart Irrigation Analysis Ready</h3>
              <p>Configure your field parameters and click "Generate Smart Irrigation Plan" to get AI-powered recommendations tailored to your specific conditions.</p>
              
              <div className="features-preview">
                <div className="feature-item">
                  <FaChartLine />
                  <span>ML-based predictions</span>
                </div>
                <div className="feature-item">
                  <FaTint />
                  <span>Water optimization</span>
                </div>
                <div className="feature-item">
                  <FaCalendarAlt />
                  <span>Weekly scheduling</span>
                </div>
                <div className="feature-item">
                  <FaLightbulb />
                  <span>Smart recommendations</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IrrigationPlanning;