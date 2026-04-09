import { useNavigate } from "react-router-dom";
import "./LegalAdvisor.css";

function LegalAdvisor() {
  const navigate = useNavigate();

  return (
    <div className="legal-container">

      <h1 className="title">Legal Advisor Dashboard</h1>

      <p className="description">
        This dashboard allows legal professionals to provide guidance,
        support victims, and manage legal resources efficiently.
      </p>

      {/* Navigation Buttons */}
      <div className="button-group">
        <button 
          className="btn primary"
          onClick={() => navigate("/legal")}
        >
          ⚖️ Provide Legal Advice
        </button>

        <button 
          className="btn secondary"
          onClick={() => navigate("/resources")}
        >
          📚 Update Legal Resources
        </button>

        <button 
          className="btn tertiary"
          onClick={() => navigate("/actions")}
        >
          📝 Assist Legal Actions
        </button>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h2>Key Responsibilities</h2>

        <ul>
          <li>✔ Guide victims on legal rights and procedures</li>
          <li>✔ Help file FIRs and legal complaints</li>
          <li>✔ Provide court-related assistance</li>
          <li>✔ Update legal awareness resources</li>
          <li>✔ Maintain confidentiality and ethics</li>
        </ul>
      </div>

      {/* Quick Tips */}
      <div className="tips">
        <h3>Legal Awareness Tips</h3>
        <p>• Always document evidence (messages, photos, recordings).</p>
        <p>• File complaints at the nearest police station.</p>
        <p>• Seek protection orders if necessary.</p>
        <p>• Use government helplines for immediate legal aid.</p>
      </div>

    </div>
  );
}

export default LegalAdvisor;