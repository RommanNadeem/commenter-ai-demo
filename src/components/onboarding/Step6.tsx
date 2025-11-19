import { OnboardingData } from "@/types/onboarding";

interface Step6Props {
  onNext: () => void;
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export default function OnboardingStep6({ onNext, data, updateData }: Step6Props) {
  const handleConnect = () => {
    updateData({ linkedInConnected: true });
    onNext();
  };

  const handleSkip = () => {
    onNext();
  };

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Connect LinkedIn</h2>
      </div>

      <div className="info-list">
        <div className="info-item">
          <span className="info-icon">✓</span>
          <span>We read your posts, comments, DMs, and profile data.</span>
        </div>
        <div className="info-item">
          <span className="info-icon">✓</span>
          <span>We never post or send messages without your approval.</span>
        </div>
        <div className="info-item">
          <span className="info-icon">✓</span>
          <span>You can disconnect anytime.</span>
        </div>
      </div>

      <div className="step-actions">
        <button className="btn" onClick={handleConnect}>
          Connect LinkedIn
        </button>
        <button className="btn-text" onClick={handleSkip}>
          Skip for now
        </button>
      </div>
    </div>
  );
}

