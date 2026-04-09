import { useNavigate } from "react-router-dom";
import "./LegalInfo.css";

function LegalInfo() {
  const navigate = useNavigate();

  return (
    <div className="legalinfo-container">

      <h1>Legal Information</h1>

      <p className="desc">
        Learn about your legal rights and protections against domestic violence.
        These laws are designed to ensure your safety and justice.
      </p>

      <div className="cards">

        <div className="card">
          <h3>Domestic Violence Act</h3>
          <p>
            Protects women from physical, emotional, and economic abuse.
            Provides legal protection and shelter rights.
          </p>
        </div>

        <div className="card">
          <h3>Dowry Prohibition Act</h3>
          <p>
            Makes giving or taking dowry a punishable offense under law.
          </p>
        </div>

        <div className="card">
          <h3>Section 498A IPC</h3>
          <p>
            Protects women from cruelty and harassment by husband or relatives.
          </p>
        </div>

      </div>

      {/* Navigation */}
      <div className="btn-group">
        <button onClick={() => navigate("/victim")}>
          ⬅ Back to Victim
        </button>

        <button onClick={() => navigate("/counselling")}>
          Next: Counselling →
        </button>
      </div>

    </div>
  );
}

export default LegalInfo;