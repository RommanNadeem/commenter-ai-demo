import { OnboardingData } from "@/app/onboarding/page";

interface Step2Props {
  onNext: () => void;
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const roles = [
  "Founder / Solo expert",
  "SDR / BDR",
  "Account Executive",
  "Other"
];

export default function OnboardingStep2({ onNext, data, updateData }: Step2Props) {
  const handleSelect = (role: string) => {
    updateData({ role });
  };

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>What best describes you</h2>
      </div>
      <div className="option-grid">
        {roles.map((role) => (
          <button
            key={role}
            className={`option-card ${data.role === role ? 'selected' : ''}`}
            onClick={() => handleSelect(role)}
          >
            {role}
          </button>
        ))}
      </div>
      <div className="step-actions">
        <button 
          className="btn" 
          onClick={onNext}
          disabled={!data.role}
        >
          Next
        </button>
      </div>
    </div>
  );
}

