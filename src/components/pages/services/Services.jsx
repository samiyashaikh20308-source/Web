import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "RENOVATION",
      desc: "Renovation is the process of improving a broken, damaged, or outdated structure.",
    },
    {
      icon: "🏗️",
      title: "METAL ROOFING",
      desc: "For a newly constructed metal roof, a metal roof sealer is required.",
    },
    {
      icon: "⚡",
      title: "ELECTRICAL",
      desc: "Electricity is related to magnetism, both being part of electromagnetism.",
    },
    {
      icon: "🚿",
      title: "PLUMBING",
      desc: "Plumbing is any system that conveys fluids for a wide range of applications.",
    },
    {
      icon: "🎨",
      title: "PAINTING",
      desc: "Painting services include interior and exterior wall finishing and decoration.",
    },
    {
      icon: "📈",
      title: "CONSULTING",
      desc: "Organizations may draw upon consulting services to improve performance.",
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h1>Our Services</h1>

        <p className="subtitle">
          Construction sector is considered to be one of the main sources of
          national economy and country development.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <button className="btn">Explore More</button>
      </div>
    </section>
  );
};

export default Services;