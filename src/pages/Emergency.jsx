import React from "react";
import "./Emergency.css";

function Emergency() {
  return (
    <div className="emergency-container">

      <h1 className="emergency-title">
        EMERGENCY HELP
      </h1>

      <p className="emergency-subtitle">
        Immediate assistance is available 24/7
      </p>

      <button className="call-button">
        📞 CALL NOW
      </button>

      <div className="emergency-cards">

        <div className="ecard">
          <h3>Police Emergency</h3>
          <p>Call: 100</p>
        </div>

        <div className="ecard">
          <h3>Women Helpline</h3>
          <p>Call: 181</p>
        </div>

        <div className="ecard">
          <h3>Ambulance</h3>
          <p>Call: 108</p>
        </div>

      </div>

    </div>
  );
}

export default Emergency;