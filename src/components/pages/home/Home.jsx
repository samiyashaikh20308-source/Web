import React from 'react'
import pic1 from '../../../assets/pic1.jpg'
import "./home.css";

const Home = () => {
  return (
    <>
    <div>
      <section className="hero">

        <h1>
          Take your business
          <br />
          to new places
        </h1>

        <p>
          Expand your team beyond borders with our Global HR Platform.
          Manage global payroll, compliance and benefits for employees.
        </p>

        <div className="email-box">
          <input
            type="email"
            placeholder="Enter your work email"
          />

          <button>Get Started</button>
        </div>

      </section>

      <section className="images">

        <div className="card">
          <img src="src/assets/bs1.webp"/>
        </div>

        <div className="card">
          <img src="src/assets/bs2.avif" alt="town"/>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
