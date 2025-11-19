interface Step11Props {
  onNext: () => void;
}

export default function OnboardingStep11({ onNext }: Step11Props) {
  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>See it in the pipeline</h2>
      </div>

      <div className="pipeline-board-preview">
        <div className="pipeline-columns">
          <div className="pipeline-column">
            <div className="column-header">
              <h3>New</h3>
              <span className="count">1</span>
            </div>
            <div className="pipeline-card highlighted">
              <strong>Sarah Chen</strong>
              <span>VP Sales @ TechCorp</span>
              <span className="source">From: This DM thread</span>
            </div>
          </div>

          <div className="pipeline-column">
            <div className="column-header">
              <h3>Engaged</h3>
              <span className="count">0</span>
            </div>
          </div>

          <div className="pipeline-column">
            <div className="column-header">
              <h3>Call Scheduled</h3>
              <span className="count">0</span>
            </div>
          </div>

          <div className="pipeline-column">
            <div className="column-header">
              <h3>Won</h3>
              <span className="count">0</span>
            </div>
          </div>
        </div>

        <div className="pipeline-hint">
          <p>💡 Drag this card to the next stage when the deal progresses.</p>
        </div>
      </div>

      <div className="step-actions">
        <button className="btn" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

