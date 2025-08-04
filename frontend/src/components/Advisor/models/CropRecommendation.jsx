// // CropRecommendation.jsx
// import React, { useState } from "react";
// import axios from 'axios'; 
// import "../styles/modelStyles.css";
// import {
//   FaArrowLeft,
//   FaLeaf,
//   FaCloudSun,
//   FaTint,
//   FaTemperatureHigh,
// } from "react-icons/fa";

// const CropRecommendation = ({ onBack }) => {
//   const [formData, setFormData] = useState({
//     nitrogen: 50,
//     phosphorus: 50,
//     potassium: 50,
//     temperature: 25,
//     humidity: 50,
//     ph: 6.5,
//     rainfall: 200,
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: parseFloat(value),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would normally send the data to your ML model
//     // For now, let's simulate a prediction
    
//     const handleSubmit = async (e) => {
//       e.preventDefault();

//       // Prepare data with backend's expected keys
//       const payload = {
//         N: formData.nitrogen,
//         P: formData.phosphorus,
//         K: formData.potassium,
//         temperature: formData.temperature,
//         humidity: formData.humidity,
//         ph: formData.ph,
//         rainfall: formData.rainfall,
//       };

//       try {
//         const res = await axios.post("http://localhost:5000/predict", payload);
//         const predictedCrop = res.data.predicted_crop;

//         // You can later map real metadata based on crop name from a JSON/db
//         setPrediction({
//           crop: predictedCrop,
//           confidence: 95, // Mocked, unless your backend returns confidence
//           alternatives: ["Wheat", "Maize"], // Optional fallback crops
//           growthCycle: "110-130 days", // Static or lookup later
//           waterRequirement: "Moderate", // Based on crop
//           profitPotential: "High", // Based on crop
//         });

//       } catch (error) {
//         console.error("Prediction failed:", error);
//         setPrediction({
//           crop: "Prediction failed",
//           confidence: 0,
//           alternatives: [],
//           growthCycle: "N/A",
//           waterRequirement: "N/A",
//           profitPotential: "N/A",
//         });
//       }
//     };

//   };

//   return (
//     <div className="model-container">
//       <button className="back-button" onClick={onBack}>
//         <FaArrowLeft /> Back to Advisors
//       </button>

//       <h2 className="model-title">Crop Recommendation</h2>
//       <p className="model-description">
//         Get AI-powered suggestions for the best crops based on your soil and
//         climate conditions.
//       </p>

//       <div className="model-content">
//         <div className="input-section">
//           <h3>Enter Your Farm Parameters</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Nitrogen (N) - kg/ha</label>
//               <input
//                 type="range"
//                 name="nitrogen"
//                 min="0"
//                 max="140"
//                 value={formData.nitrogen}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.nitrogen}</div>
//             </div>

//             <div className="form-group">
//               <label>Phosphorus (P) - kg/ha</label>
//               <input
//                 type="range"
//                 name="phosphorus"
//                 min="5"
//                 max="145"
//                 value={formData.phosphorus}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.phosphorus}</div>
//             </div>

//             <div className="form-group">
//               <label>Potassium (K) - kg/ha</label>
//               <input
//                 type="range"
//                 name="potassium"
//                 min="5"
//                 max="205"
//                 value={formData.potassium}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.potassium}</div>
//             </div>

//             <div className="form-group">
//               <label>Temperature (°C)</label>
//               <input
//                 type="range"
//                 name="temperature"
//                 min="8"
//                 max="43"
//                 value={formData.temperature}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.temperature}°C</div>
//             </div>

//             <div className="form-group">
//               <label>Humidity (%)</label>
//               <input
//                 type="range"
//                 name="humidity"
//                 min="14"
//                 max="99"
//                 value={formData.humidity}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.humidity}%</div>
//             </div>

//             <div className="form-group">
//               <label>pH Value</label>
//               <input
//                 type="range"
//                 name="ph"
//                 min="3.5"
//                 max="9.9"
//                 step="0.1"
//                 value={formData.ph}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.ph}</div>
//             </div>

//             <div className="form-group">
//               <label>Rainfall (mm)</label>
//               <input
//                 type="range"
//                 name="rainfall"
//                 min="20"
//                 max="298"
//                 value={formData.rainfall}
//                 onChange={handleInputChange}
//               />
//               <div className="range-value">{formData.rainfall} mm</div>
//             </div>

//             <button type="submit" className="predict-button">
//               Generate Recommendation
//             </button>
//           </form>
//         </div>

//         <div className="result-section">
//           {prediction ? (
//             <div className="prediction-result">
//               <div className="prediction-header">
//                 <h3>Recommended Crop</h3>
//                 <div className="confidence-badge">
//                   {prediction.confidence}% Confidence
//                 </div>
//               </div>

//               <div className="crop-card">
//                 <div className="crop-icon">
//                   <FaLeaf />
//                 </div>
//                 <h2 className="crop-name">{prediction.crop}</h2>

//                 <div className="crop-details">
//                   <div className="detail-item">
//                     <FaCloudSun />
//                     <div>
//                       <h4>Growth Cycle</h4>
//                       <p>{prediction.growthCycle}</p>
//                     </div>
//                   </div>

//                   <div className="detail-item">
//                     <FaTint />
//                     <div>
//                       <h4>Water Requirement</h4>
//                       <p>{prediction.waterRequirement}</p>
//                     </div>
//                   </div>

//                   <div className="detail-item">
//                     <FaTemperatureHigh />
//                     <div>
//                       <h4>Profit Potential</h4>
//                       <p>{prediction.profitPotential}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="alternatives">
//                   <h4>Alternative Options:</h4>
//                   <div className="alt-crops">
//                     {prediction.alternatives.map((crop, index) => (
//                       <div key={index} className="alt-crop">
//                         {crop}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="placeholder-result">
//               <div className="animation-container">
//                 <div className="hexagon-animation">
//                   {[...Array(6)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="hex"
//                       style={{ animationDelay: `${i * 0.2}s` }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//               <h3>Your Crop Recommendation Will Appear Here</h3>
//               <p>
//                 Fill in the parameters on the left and click "Generate
//                 Recommendation"
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CropRecommendation;


// CropRecommendation.jsx
import React, { useState } from "react";
import axios from 'axios'; 
import "../styles/modelStyles.css";
import {
  FaArrowLeft,
  FaLeaf,
  FaCloudSun,
  FaTint,
  FaTemperatureHigh,
  FaSpinner,
} from "react-icons/fa";

const CropRecommendation = ({ onBack }) => {
  const [formData, setFormData] = useState({
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    temperature: 25,
    humidity: 50,
    ph: 6.5,
    rainfall: 200,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Crop metadata mapping
  const cropMetadata = {
    rice: { growthCycle: "120-150 days", waterRequirement: "High", profitPotential: "Medium" },
    wheat: { growthCycle: "110-130 days", waterRequirement: "Moderate", profitPotential: "High" },
    maize: { growthCycle: "90-120 days", waterRequirement: "Moderate", profitPotential: "High" },
    cotton: { growthCycle: "180-200 days", waterRequirement: "High", profitPotential: "Very High" },
    sugarcane: { growthCycle: "300-365 days", waterRequirement: "Very High", profitPotential: "High" },
    pulses: { growthCycle: "60-90 days", waterRequirement: "Low", profitPotential: "Medium" },
    // Add more crops as needed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Prepare data with backend's expected keys
    const payload = {
      N: formData.nitrogen,
      P: formData.phosphorus,
      K: formData.potassium,
      temperature: formData.temperature,
      humidity: formData.humidity,
      ph: formData.ph,
      rainfall: formData.rainfall,
    };

    try {
      const response = await axios.post("http://localhost:5000/predict", payload, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      const { predicted_crop, confidence, alternatives } = response.data;
      const cropLower = predicted_crop.toLowerCase();
      const metadata = cropMetadata[cropLower] || {
        growthCycle: "90-120 days",
        waterRequirement: "Moderate",
        profitPotential: "Medium"
      };

      setPrediction({
        crop: predicted_crop,
        confidence: confidence || 95,
        alternatives: alternatives || ["Wheat", "Maize"],
        ...metadata
      });

    } catch (error) {
      console.error("Prediction failed:", error);
      
      let errorMessage = "Prediction failed. Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.error || errorMessage;
      } else if (error.request) {
        errorMessage = "Cannot connect to server. Make sure the backend is running.";
      }
      
      setError(errorMessage);
      setPrediction(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="model-container">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Back to Advisors
      </button>

      <h2 className="model-title">Crop Recommendation</h2>
      <p className="model-description">
        Get AI-powered suggestions for the best crops based on your soil and
        climate conditions.
      </p>

      <div className="model-content">
        <div className="input-section">
          <h3>Enter Your Farm Parameters</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nitrogen (N) - kg/ha</label>
              <input
                type="range"
                name="nitrogen"
                min="0"
                max="140"
                value={formData.nitrogen}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className="range-value">{formData.nitrogen}</div>
            </div>

            <div className="form-group">
              <label>Phosphorus (P) - kg/ha</label>
              <input
                type="range"
                name="phosphorus"
                min="5"
                max="145"
                value={formData.phosphorus}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className="range-value">{formData.phosphorus}</div>
            </div>

            <div className="form-group">
              <label>Potassium (K) - kg/ha</label>
              <input
                type="range"
                name="potassium"
                min="5"
                max="205"
                value={formData.potassium}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className="range-value">{formData.potassium}</div>
            </div>

            <div className="form-group">
              <label>Temperature (°C)</label>
              <input
                type="range"
                name="temperature"
                min="8"
                max="43"
                value={formData.temperature}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className="range-value">{formData.temperature}°C</div>
            </div>

            <div className="form-group">
              <label>Humidity (%)</label>
              <input
                type="range"
                name="humidity"
                min="14"
                max="99"
                value={formData.humidity}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className="range-value">{formData.humidity}%</div>
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
                disabled={loading}
              />
              <div className="range-value">{formData.ph}</div>
            </div>

            <div className="form-group">
              <label>Rainfall (mm)</label>
              <input
                type="range"
                name="rainfall"
                min="20"
                max="298"
                value={formData.rainfall}
                onChange={handleInputChange}
                disabled={loading}
              />
              <div className="range-value">{formData.rainfall} mm</div>
            </div>

            <button type="submit" className="predict-button" disabled={loading}>
              {loading ? (
                <>
                  <FaSpinner className="spinner" /> Predicting...
                </>
              ) : (
                "Generate Recommendation"
              )}
            </button>
          </form>
        </div>

        <div className="result-section">
          {error && (
            <div className="error-message">
              <h3>Error</h3>
              <p>{error}</p>
            </div>
          )}

          {prediction ? (
            <div className="prediction-result">
              <div className="prediction-header">
                <h3>Recommended Crop</h3>
                <div className="confidence-badge">
                  {prediction.confidence}% Confidence
                </div>
              </div>

              <div className="crop-card">
                <div className="crop-icon">
                  <FaLeaf />
                </div>
                <h2 className="crop-name">{prediction.crop}</h2>

                <div className="crop-details">
                  <div className="detail-item">
                    <FaCloudSun />
                    <div>
                      <h4>Growth Cycle</h4>
                      <p>{prediction.growthCycle}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaTint />
                    <div>
                      <h4>Water Requirement</h4>
                      <p>{prediction.waterRequirement}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaTemperatureHigh />
                    <div>
                      <h4>Profit Potential</h4>
                      <p>{prediction.profitPotential}</p>
                    </div>
                  </div>
                </div>

                {prediction.alternatives && prediction.alternatives.length > 0 && (
                  <div className="alternatives">
                    <h4>Alternative Options:</h4>
                    <div className="alt-crops">
                      {prediction.alternatives.map((crop, index) => (
                        <div key={index} className="alt-crop">
                          {crop}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : !loading && !error && (
            <div className="placeholder-result">
              <div className="animation-container">
                <div className="hexagon-animation">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="hex"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
              <h3>Your Crop Recommendation Will Appear Here</h3>
              <p>
                Fill in the parameters on the left and click "Generate
                Recommendation"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropRecommendation;