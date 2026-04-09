import React, { useState } from "react";
import "./Counsellor.css";

function Counsellor() {

  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Anonymous User",
      issue: "Emotional abuse and threats",
      status: "Pending",
      guidance: ""
    },
    {
      id: 2,
      name: "Priya Sharma",
      issue: "Needs counselling support",
      status: "In Progress",
      guidance: ""
    },
    {
      id: 3,
      name: "Anita Kumari",
      issue: "Fear and mental stress",
      status: "Resolved",
      guidance: "Provided emotional support"
    }
  ]);


  const updateGuidance = (id, text) => {

    const updated = requests.map(req =>
      req.id === id ? { ...req, guidance: text, status: "In Progress" } : req
    );

    setRequests(updated);

  };


  const markResolved = (id) => {

    const updated = requests.map(req =>
      req.id === id ? { ...req, status: "Resolved" } : req
    );

    setRequests(updated);

  };


  return (

    <div className="counsellor-container">

      <h1 className="title">
        Counsellor Dashboard
      </h1>


      {/* Victim Requests */}

      <h2>View Victim Requests</h2>

      <div className="requests-container">

        {requests.map((req) => (

          <div key={req.id} className="request-card">

            <p><b>Name:</b> {req.name}</p>

            <p><b>Issue:</b> {req.issue}</p>

            <p>
              <b>Status:</b>
              <span className={`status ${req.status.replace(" ", "")}`}>
                {req.status}
              </span>
            </p>


            {/* Provide Guidance */}

            <textarea
              placeholder="Provide guidance..."
              onChange={(e) =>
                updateGuidance(req.id, e.target.value)
              }
            />

            <button
              className="resolve-btn"
              onClick={() => markResolved(req.id)}
            >
              Mark Resolved
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Counsellor;