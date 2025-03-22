// // import React from "react";
// // import "./styles//Hero.css";
// // //import farmImage from "../assets/farm-animation.gif"; // Replace with an actual animation or image
// // import farmImage from "../../assets/image.png";
// // const Hero = () => {
// //   return (
// //     <section className="hero">
// //       <div className="hero-content">
// //         <h1>
// //           Welcome to <span className="highlight">FarmingAI</span>
// //         </h1>
// //         <p>Revolutionizing agriculture with AI-powered insights.</p>
// //         <button className="cta-button">Get Started</button>
// //       </div>

// //       <div className="hero-image">
// //         <img src={farmImage} alt="Futuristic Farm Animation" />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import "./styles/Hero.css";
// import farmImage from "../../assets/image.png";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>
//           Welcome to <span className="highlight">FarmingAI</span>
//         </h1>
//         <p>Revolutionizing agriculture with AI-powered insights.</p>
//         <button className="cta-button">🚀 Get Started</button>
//       </div>

//       <div className="hero-image">
//         <img src={farmImage} alt="Futuristic Farm Animation" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import "./styles/Hero.css";
// import farmImage from "../assets/farm-animation.gif"; // Replace with an actual animation or image
import farmImage from "../../assets/image.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Welcome to <span className="highlight">FarmingAI</span>
        </h1>
        <p>Revolutionizing agriculture with AI-powered insights.</p>
        <button className="cta-button">🚀 Get Started</button>
      </div>
      <div className="hero-image">
        <img src={farmImage} alt="Futuristic Farm Animation" />
      </div>
    </section>
  );
};

export default Hero;
