interface Step12Props {
  onNext: () => void;
}

export default function OnboardingStep12({ onNext }: Step12Props) {
  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Your first insight</h2>
      </div>

      <div className="insight-card">
        <div className="insight-icon">✨</div>
        <h3>Your comment led to a tracked lead</h3>
        <p>Your comment on <strong>"Looking for a better way to track LinkedIn conversations"</strong> led to 1 tracked lead.</p>
        <div className="insight-detail">
          <p>This DM is now your first pipeline lead.</p>
        </div>
      </div>

      <div className="step-actions">
        <button className="btn" onClick={onNext}>
          See more insights
        </button>
        <button className="btn-text" onClick={onNext}>
          Back to feed
        </button>
      </div>
    </div>
  );
}

