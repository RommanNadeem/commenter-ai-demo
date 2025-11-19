interface Step5Props {
  onNext: () => void;
}

export default function OnboardingStep5({ onNext }: Step5Props) {
  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>You are in good company</h2>
      </div>

      <div className="social-proof-card">
        <div className="testimonial-large">
          <p className="testimonial-quote">
            "Commenter AI paid for itself after the first launch. We finally connected LinkedIn to pipeline with receipts."
          </p>
          <strong>– Priya, Founder @ SignalOps</strong>
        </div>

        <div className="metrics-grid">
          <div className="metric-item">
            <div className="metric-number">2x</div>
            <div className="metric-label">Faster pipeline</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">85%</div>
            <div className="metric-label">More tracked leads</div>
          </div>
          <div className="metric-item">
            <div className="metric-number">3x</div>
            <div className="metric-label">ROI in first month</div>
          </div>
        </div>
      </div>

      <p className="step-note">
        Next, we will connect LinkedIn so we can personalize your feed.
      </p>

      <div className="step-actions">
        <button className="btn" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

