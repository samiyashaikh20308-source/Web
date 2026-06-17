import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
  <section className="hero-section">
    <h1>About Us</h1>
    <p>
      We help businesses expand globally by providing simple, innovative,
      and efficient workforce management solutions.
    </p>
    <button>Learn More</button>
  </section>

  <section className="cards-section">

    <div className="card">
      <h2>🎯 Our Mission</h2>
      <p>
        Our mission is to simplify workforce management and help
        organizations achieve growth through technology-driven solutions.
      </p>
    </div>

    <div className="card">
      <h2>🚀 Our Vision</h2>
      <p>
        We aim to become a trusted global partner for businesses
        seeking efficient employee management solutions.
      </p>
    </div>

    <div className="card">
      <h2>⭐ Why Choose Us?</h2>
      <ul>
        <li>Easy Employee Management</li>
        <li>Secure Data Storage</li>
        <li>User-Friendly Interface</li>
        <li>24/7 Support</li>
        <li>Modern Technology</li>
      </ul>
    </div>

  </section>

  <section className="stats-section">

    <div className="stat-box">
      <h2>500+</h2>
      <p>Clients</p>
    </div>

    <div className="stat-box">
      <h2>1000+</h2>
      <p>Projects Completed</p>
    </div>

    <div className="stat-box">
      <h2>24/7</h2>
      <p>Support</p>
    </div>

  </section>
</div>
  );
};

export default About