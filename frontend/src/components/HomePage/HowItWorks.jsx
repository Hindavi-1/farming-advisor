// // HowItWorksSection.jsx
// import React from "react";
// import "./styles/howItWorks.css";
// import { FaClipboardList, FaRobot, FaMobileAlt } from "react-icons/fa";

// const HowItWorksSection = () => {
//   return (
//     <section className="how-it-works-section" id="how-it-works">
//       <div className="container">
//         <h2 className="section-title">
//           How AI Transforms Your Farming Decisions
//         </h2>

//         <div className="steps-container">
//           <div className="step-card">
//             <div className="step-number">1</div>
//             <div className="step-icon">
//               <FaClipboardList />
//             </div>
//             <h3>Input Your Farm Data</h3>
//             <p>
//               Submit soil sample results, location details, field dimensions,
//               and current crop information through our simple, guided form
//               interface.
//             </p>
//           </div>

//           <div className="step-connector"></div>

//           <div className="step-card">
//             <div className="step-number">2</div>
//             <div className="step-icon">
//               <FaRobot />
//             </div>
//             <h3>Advanced AI Analysis</h3>
//             <p>
//               Our algorithms process your specific farm data, integrate climate
//               databases and agricultural research, and continuously learn from
//               successful farming outcomes.
//             </p>
//           </div>

//           <div className="step-connector"></div>

//           <div className="step-card">
//             <div className="step-number">3</div>
//             <div className="step-icon">
//               <FaMobileAlt />
//             </div>
//             <h3>Receive Personalized Recommendations</h3>
//             <p>
//               Get detailed crop recommendations, precise irrigation schedules,
//               and custom fertilizer formulations - all accessible on any device,
//               even in the field.
//             </p>
//           </div>
//         </div>

//         <div className="flow-diagram">
//           <div className="flow-item">
//             <div className="flow-icon farm-icon"></div>
//             <p>Farm Data</p>
//           </div>
//           <div className="flow-arrow">→</div>
//           <div className="flow-item">
//             <div className="flow-icon ai-icon"></div>
//             <p>AI Analysis</p>
//           </div>
//           <div className="flow-arrow">→</div>
//           <div className="flow-item">
//             <div className="flow-icon recommendation-icon"></div>
//             <p>Smart Recommendations</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;

// HowItWorksSection.jsx
import React from "react";
import "./styles/howItWorks.css";
import { FaClipboardList, FaRobot, FaMobileAlt } from "react-icons/fa";

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">
          How AI Transforms Your Farming Decisions
        </h2>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <FaClipboardList />
            </div>
            <h3>Input Your Farm Data</h3>
            <p>
              Submit soil sample results, location details, field dimensions,
              and current crop information through our simple, guided form
              interface.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <FaRobot />
            </div>
            <h3>Advanced AI Analysis</h3>
            <p>
              Our algorithms process your specific farm data, integrate climate
              databases and agricultural research, and continuously learn from
              successful farming outcomes.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <FaMobileAlt />
            </div>
            <h3>Receive Personalized Recommendations</h3>
            <p>
              Get detailed crop recommendations, precise irrigation schedules,
              and custom fertilizer formulations - all accessible on any device,
              even in the field.
            </p>
          </div>
        </div>

        <div className="flow-diagram">
          <div className="flow-item">
            <div className="flow-icon farm-icon"></div>
            <p>Farm Data</p>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon ai-icon"></div>
            <p>AI Analysis</p>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-item">
            <div className="flow-icon recommendation-icon"></div>
            <p>Smart Recommendations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
