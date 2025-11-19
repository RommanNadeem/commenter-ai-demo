import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";

interface Step3Props {
  onNext: () => void;
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const goals = [
  "Get more qualified leads",
  "Keep my pipeline organized",
  "Shorten my sales cycle",
  "Other"
];

const optionalTags = [
  "I sell services",
  "I sell SaaS",
  "I manage a team"
];

export default function OnboardingStep3({ onNext, data, updateData }: Step3Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>(data.optionalTags || []);

  const handleGoalSelect = (goal: string) => {
    updateData({ goal });
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateData({ optionalTags: newTags });
  };

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>What is your main goal</h2>
      </div>
      <div className="option-grid">
        {goals.map((goal) => (
          <button
            key={goal}
            className={`option-card ${data.goal === goal ? 'selected' : ''}`}
            onClick={() => handleGoalSelect(goal)}
          >
            {goal}
          </button>
        ))}
      </div>
      
      <div className="optional-section">
        <p className="optional-label">Optional:</p>
        <div className="tag-chips">
          {optionalTags.map((tag) => (
            <button
              key={tag}
              className={`tag-chip ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="step-actions">
        <button 
          className="btn" 
          onClick={onNext}
          disabled={!data.goal}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

