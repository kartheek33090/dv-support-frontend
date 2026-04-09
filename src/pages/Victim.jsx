import { useState } from "react";
import { addUser } from "../api";
import "./Victim.css";

function Victim() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Victim",
    category: "",
    description: "",
    location: "",
    anonymous: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = form.anonymous
      ? { ...form, name: "Anonymous", email: "hidden@gmail.com" }
      : form;

    addUser(dataToSend)
      .then(() => {
        alert("Report Submitted Successfully ✅");
        setForm({
          name: "",
          email: "",
          role: "Victim",
          category: "",
          description: "",
          location: "",
          anonymous: false
        });
      })
      .catch(() => alert("Error ❌"));
  };

  return (
    <div className="victim-container">

      <h1 className="title">SafeSupport - Victim Support Portal</h1>

      <div className="victim-grid">

        {/* LEFT PANEL */}
        <div className="info-box">
          <h2>🛡️ Your Safety Matters</h2>
          <p>
            Report incidents safely and confidentially. Our support team will
            respond as soon as possible.
          </p>

          <div className="emergency-box">
            <h3>🚨 Emergency Help</h3>
            <p>Police: 100</p>
            <p>Women Helpline: 1091</p>
            <button className="sos-btn">SEND SOS</button>
          </div>
        </div>

        {/* RIGHT PANEL FORM */}
        <div className="form-box">
          <h2>📄 Report an Issue</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              disabled={form.anonymous}
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              disabled={form.anonymous}
            />

            {/* CATEGORY */}
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              required
            >
              <option value="">Select Category</option>
              <option>Harassment</option>
              <option>Domestic Violence</option>
              <option>Cyber Crime</option>
              <option>Other</option>
            </select>

            {/* DESCRIPTION */}
            <textarea
              placeholder="Describe your issue..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />

            {/* LOCATION */}
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            />

            {/* ANONYMOUS */}
            <label className="checkbox">
              <input
                type="checkbox"
                checked={form.anonymous}
                onChange={(e) =>
                  setForm({ ...form, anonymous: e.target.checked })
                }
              />
              Report Anonymously
            </label>

            <button type="submit">Submit Report</button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Victim;