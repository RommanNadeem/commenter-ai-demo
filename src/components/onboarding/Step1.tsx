interface Step1Props {
  onNext: () => void;
}

export default function OnboardingStep1({ onNext }: Step1Props) {
  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h1>Get your first lead from comments and DMs in the next 7 days.</h1>
        <p>We will connect your LinkedIn, focus your feed, and track conversations into a simple pipeline.</p>
      </div>
      <div className="step-actions">
        <button className="btn" onClick={onNext}>
          Get started
        </button>
      </div>
    </div>
  );
}

