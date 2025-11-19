import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";

interface Step7Props {
  onNext: () => void;
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export default function OnboardingStep7({ onNext, data, updateData }: Step7Props) {
  const [icpDescription, setIcpDescription] = useState(data.icpDescription || "");
  const [icpProfiles, setIcpProfiles] = useState(data.icpProfiles?.join("\n") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profiles = icpProfiles
      .split("\n")
      .filter((p: string) => p.trim())
      .slice(0, 3);
    
    updateData({ 
      icpDescription,
      icpProfiles: profiles
    });
    onNext();
  };

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Who do you want to talk to</h2>
      </div>

      <form onSubmit={handleSubmit} className="icp-form">
        <div className="form-group">
          <label htmlFor="icp-description">Describe your ideal buyers</label>
          <input
            id="icp-description"
            type="text"
            value={icpDescription}
            onChange={(e) => setIcpDescription(e.target.value)}
            placeholder="B2B SaaS founders, HR leaders, marketing agencies"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="icp-profiles">
            Paste up to 3 profiles or companies you care about <span className="optional">(optional)</span>
          </label>
          <textarea
            id="icp-profiles"
            value={icpProfiles}
            onChange={(e) => setIcpProfiles(e.target.value)}
            placeholder="https://linkedin.com/in/person1&#10;https://linkedin.com/in/person2&#10;https://linkedin.com/company/company1"
            rows={4}
          />
        </div>

        <div className="step-actions">
          <button type="submit" className="btn">
            Create my feed
          </button>
        </div>
      </form>
    </div>
  );
}

