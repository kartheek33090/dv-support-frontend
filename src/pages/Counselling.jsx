import { useNavigate } from "react-router-dom";
import "./Counselling.css";

function Counselling() {
  const navigate = useNavigate();

  return (
    <div className="counselling-container">

      <h1>Counselling Support</h1>

      <p className="desc">
        Professional counselling helps victims cope with trauma,
        rebuild confidence, and plan a safer future.
      </p>

      <div className="services">

        <div className="service-card">
          <h3>Emotional Support</h3>
          <p>Talk to trained counsellors confidentially.</p>
        </div>

        <div className="service-card">
          <h3>Trauma Recovery</h3>
          <p>Guidance to overcome fear, stress, and anxiety.</p>
        </div>

        <div className="service-card">
          <h3>Family Counselling</h3>
          <p>Resolve conflicts and improve relationships safely.</p>
        </div>

      </div>

      <div className="helpline">
        <h3>Helpline</h3>
        <p>📞 Call: 9152987821 (Mental Health Support)</p>
      </div>

      {/* Navigation */}
      <div className="btn-group">
        <button onClick={() => navigate("/legal-info")}>
          ⬅ Back to Legal Info
        </button>

        <button onClick={() => navigate("/victim")}>
          Home →
        </button>
      </div>

    </div>
  );
}

export default Counselling;