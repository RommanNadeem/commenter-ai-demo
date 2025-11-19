import { OnboardingData } from "@/app/onboarding/page";

interface Step10Props {
  onNext: () => void;
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export default function OnboardingStep10({ onNext, data, updateData }: Step10Props) {
  const handleCreateLead = () => {
    updateData({ firstLeadCreated: true });
    onNext();
  };

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Convert conversation to lead</h2>
      </div>

      <div className="lead-conversion-card">
        <div className="lead-badge">Looks like a lead</div>
        
        <div className="dm-thread-preview">
          <div className="thread-header">
            <div className="thread-avatar"></div>
            <div>
              <strong>Sarah Chen</strong>
              <span>VP Sales @ TechCorp</span>
            </div>
          </div>
          <div className="thread-messages">
            <div className="message received">
              <p>Thanks for the comment! I'd love to learn more about how you're tracking conversations.</p>
            </div>
          </div>
        </div>

        <div className="lead-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" value="Sarah Chen" readOnly />
          </div>
          <div className="form-group">
            <label>Channel</label>
            <input type="text" value="LinkedIn" readOnly />
          </div>
          <div className="form-group">
            <label>Source</label>
            <input type="text" value="This DM thread" readOnly />
          </div>
          <div className="form-group">
            <label>Stage</label>
            <select defaultValue="New">
              <option>New</option>
              <option>Engaged</option>
              <option>Call Scheduled</option>
              <option>Won</option>
            </select>
          </div>
        </div>

        <div className="step-actions">
          <button className="btn" onClick={handleCreateLead}>
            Create lead
          </button>
        </div>
      </div>
    </div>
  );
}

