import Link from "next/link";

export default function OnboardingStep13() {
  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h1>Today's plan</h1>
      </div>

      <div className="todays-plan">
        <div className="plan-checklist">
          <div className="checklist-item">
            <input type="checkbox" id="check1" defaultChecked />
            <label htmlFor="check1">Post 3 comments</label>
            <span className="checklist-progress">3/3</span>
          </div>
          <div className="checklist-item">
            <input type="checkbox" id="check2" defaultChecked />
            <label htmlFor="check2">Reply to 2 DMs</label>
            <span className="checklist-progress">2/2</span>
          </div>
          <div className="checklist-item">
            <input type="checkbox" id="check3" />
            <label htmlFor="check3">Move 1 lead forward</label>
            <span className="checklist-progress">0/1</span>
          </div>
        </div>

        <div className="progress-bar-large">
          <div className="progress-fill" style={{ width: "67%" }} />
          <span className="progress-text">67% complete</span>
        </div>

        <div className="nudge-card">
          <p>💡 You are 2 comments away from your next lead.</p>
        </div>
      </div>

      <div className="step-actions">
        <Link href="/" className="btn">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}

