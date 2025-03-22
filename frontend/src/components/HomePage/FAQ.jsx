// import React, { useState } from "react";
// import "./styles/FAQ.css";

// const faqData = [
//   {
//     question: "How does FarmingAI recommend crops?",
//     answer:
//       "Our AI analyzes soil quality, weather conditions, and past crop data to suggest the best crops for your farm.",
//   },
//   {
//     question: "How accurate is the irrigation prediction?",
//     answer:
//       "The irrigation prediction is based on real-time weather data, soil moisture levels, and crop water needs, ensuring efficient water usage.",
//   },
//   {
//     question: "How does the fertilizer recommendation work?",
//     answer:
//       "Our AI studies soil nutrient levels, crop type, and growth stage to provide optimal fertilizer recommendations.",
//   },
//   {
//     question: "Do I need to install any hardware for this system?",
//     answer:
//       "No, FarmingAI is a software-based solution that provides insights without requiring additional hardware.",
//   },
//   {
//     question: "Can I access FarmingAI on my mobile device?",
//     answer:
//       "Yes, our platform is mobile-friendly and works on any device with an internet connection.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="faq-section">
//       <h2 className="faq-title">Frequently Asked Questions</h2>
//       <div className="faq-container">
//         {faqData.map((item, index) => (
//           <div key={index} className="faq-item">
//             <div className="faq-question" onClick={() => toggleFAQ(index)}>
//               {item.question}
//               <span className="faq-icon">
//                 {activeIndex === index ? "−" : "+"}
//               </span>
//             </div>
//             <div
//               className={`faq-answer ${activeIndex === index ? "active" : ""}`}
//             >
//               {item.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import "./styles/FAQ.css";

const faqData = [
  {
    question: "How does FarmingAI recommend crops?",
    answer:
      "Our AI analyzes soil quality, weather conditions, and past crop data to suggest the best crops for your farm.",
  },
  {
    question: "How accurate is the irrigation prediction?",
    answer:
      "The irrigation prediction is based on real-time weather data, soil moisture levels, and crop water needs, ensuring efficient water usage.",
  },
  {
    question: "How does the fertilizer recommendation work?",
    answer:
      "Our AI studies soil nutrient levels, crop type, and growth stage to provide optimal fertilizer recommendations.",
  },
  {
    question: "Do I need to install any hardware for this system?",
    answer:
      "No, FarmingAI is a software-based solution that provides insights without requiring additional hardware.",
  },
  {
    question: "Can I access FarmingAI on my mobile device?",
    answer:
      "Yes, our platform is mobile-friendly and works on any device with an internet connection.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
