import React from "react";
import "../components/AboutUs/aboutUs.css";
import { FaLeaf, FaUsers, FaHistory, FaMedal } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          About <span className="highlight-text">FarmingAI</span>
        </h1>
        <p className="about-subtitle">
          Revolutionizing agriculture with cutting-edge AI technology
        </p>
      </div>

      <div className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At FarmingAI, we believe in empowering farmers with intelligent
            tools to maximize yield, minimize resource usage, and practice
            sustainable agriculture. Our AI-driven platform analyzes multiple
            data points to provide actionable insights that help farmers make
            informed decisions.
          </p>
        </div>
        <div className="mission-image">
          <div className="image-container">
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      <div className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FaLeaf />
            </div>
            <h3>Sustainability</h3>
            <p>
              We're committed to promoting sustainable farming practices that
              protect our environment for future generations.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaUsers />
            </div>
            <h3>Farmer-First Approach</h3>
            <p>
              Our solutions are designed with real farmers' needs in mind,
              ensuring they're practical, accessible, and valuable.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaHistory />
            </div>
            <h3>Innovation</h3>
            <p>
              We continuously evolve our technology to stay at the cutting edge
              of agricultural science and AI advancements.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaMedal />
            </div>
            <h3>Excellence</h3>
            <p>
              We strive for excellence in everything we do, from data accuracy
              to user experience and customer support.
            </p>
          </div>
        </div>
      </div>

      <div className="about-team">
        <h2>Our Team</h2>
        <p className="team-intro">
          FarmingAI brings together experts in agricultural science, data
          analytics, and artificial intelligence to build the most comprehensive
          farming advisor tool available.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h3>Dr. Sarah Johnson</h3>
            <p className="member-title">Agricultural Scientist & Co-founder</p>
            <p className="member-bio">
              With 15+ years in agricultural research, Dr. Johnson leads our
              crop recommendation systems and soil analysis algorithms.
            </p>
          </div>

          <div className="team-member">
            <div className="member-image"></div>
            <h3>Michael Chen</h3>
            <p className="member-title">AI Engineer & Co-founder</p>
            <p className="member-bio">
              Former Google AI researcher, Michael specializes in machine
              learning models for predictive agricultural analytics.
            </p>
          </div>

          <div className="team-member">
            <div className="member-image"></div>
            <h3>Elena Rodriguez</h3>
            <p className="member-title">Meteorologist</p>
            <p className="member-bio">
              Elena develops our weather prediction systems that help farmers
              prepare for changing climate conditions.
            </p>
          </div>

          <div className="team-member">
            <div className="member-image"></div>
            <h3>James Wilson</h3>
            <p className="member-title">UX Designer</p>
            <p className="member-bio">
              James ensures our complex AI tools are accessible and intuitive
              for farmers of all technological backgrounds.
            </p>
          </div>
        </div>
      </div>

      <div className="about-story">
        <h2>Our Story</h2>
        <div className="story-timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>2020</h3>
              <p>
                FarmingAI was founded with a vision to bring AI-powered insights
                to small and medium-scale farmers.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>2021</h3>
              <p>
                Launched our first crop recommendation system after extensive
                testing with 50 partner farms across diverse climate zones.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>2022</h3>
              <p>
                Added real-time weather integration and expanded our soil
                analysis capabilities to cover 100+ crop varieties.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>2023</h3>
              <p>
                Developed advanced irrigation and fertilization recommendation
                systems based on machine learning algorithms.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Today</h3>
              <p>
                Serving thousands of farmers worldwide with comprehensive
                AI-driven farming solutions, constantly evolving with new
                research and user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
