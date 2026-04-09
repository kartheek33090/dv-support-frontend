import React, { useState } from "react";
import "./Home.css";

function Home() {

  const [anonymous, setAnonymous] = useState(false);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero">

        <h1 className="title">
          Women Safety & Support System
        </h1>

        <p className="subtitle">
          You are not alone. Get help, support, and protection instantly.
        </p>

        {/* Buttons */}
        <div className="button-group">

          <button className="primary-btn">
            Get Support
          </button>

          <button className="secondary-btn">
            File Complaint
          </button>

          <button className="emergency-btn">
            🚨 EMERGENCY HELP
          </button>

        </div>

        {/* Switch */}
        <div className="switch-container">

          <label className="switch">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
            />
            <span className="slider"></span>
          </label>

          <span className="switch-label">
            Anonymous Mode
          </span>

        </div>

      </div>


      {/* Info Cards */}
      <div className="cards">

        <div className="card">
          <h3>👩 Victim Support</h3>
          <p>Report incidents safely and get immediate help.</p>
        </div>

        <div className="card">
          <h3>🧑‍⚖ Legal Assistance</h3>
          <p>Connect with trusted legal advisors instantly.</p>
        </div>

        <div className="card">
          <h3>💬 Counselling</h3>
          <p>Professional counsellors available 24/7.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;