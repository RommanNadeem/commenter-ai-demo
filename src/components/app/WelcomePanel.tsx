"use client";

import { useState } from "react";

interface WelcomePanelProps {
  onSave: (data: { role: string; goal: string; tags: string[] }) => void;
}

const roles = [
  "Founder / Solo expert",
  "SDR / BDR",
  "AE",
  "Coach / Agency",
  "Other",
];

const goals = [
  "More qualified leads",
  "Keep pipeline organized",
  "Shorten sales cycle",
  "Other",
];

const optionalTags = [
  "I sell services",
  "I sell SaaS",
  "I manage a team",
];

export default function WelcomePanel({ onSave }: WelcomePanelProps) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [goal, setGoal] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleNext = () => {
    if (step === 1) {
      // Welcome message step - just proceed
      setStep(2);
    } else if (step === 2 && role) {
      // Role selection step
      setStep(3);
    } else if (step === 3 && goal) {
      // Goal selection step - complete
      onSave({ role, goal, tags: selectedTags });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Prevent closing by clicking outside - non-dismissible
    e.stopPropagation();
  };

  return (
    <div className="welcome-panel-overlay" onClick={handleOverlayClick}>
      <div className="welcome-panel" onClick={(e) => e.stopPropagation()}>
        <div className="welcome-panel-header">
          <h2>
            {step === 1 
              ? "Welcome to Commenter AI"
              : step === 2
              ? "Let's tune Commenter AI to your sales motion"
              : "What's your main goal?"}
          </h2>
          <div className="welcome-step-indicator">
            Step {step} of 3
          </div>
        </div>

        <div className="welcome-panel-content">
          {step === 1 ? (
            <div className="welcome-message-step">
              <p className="welcome-message-text">
                We'll help you turn your LinkedIn comments and DMs into a visible sales pipeline. 
                Let's get started by learning a bit about you.
              </p>
            </div>
          ) : step === 2 ? (
            <>
              <div className="welcome-field">
                <label htmlFor="welcome-role">What best describes you?</label>
                <div className="welcome-options">
                  {roles.map((r) => (
                    <button
                      key={r}
                      className={`welcome-option ${role === r ? "selected" : ""}`}
                      onClick={() => setRole(r)}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="welcome-field">
                <label className="welcome-optional-label">Optional:</label>
                <div className="welcome-tags">
                  {optionalTags.map((tag) => (
                    <button
                      key={tag}
                      className={`welcome-tag ${selectedTags.includes(tag) ? "selected" : ""}`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="welcome-field">
              <label htmlFor="welcome-goal">What's your main goal?</label>
              <div className="welcome-options">
                {goals.map((g) => (
                  <button
                    key={g}
                    className={`welcome-option ${goal === g ? "selected" : ""}`}
                    onClick={() => setGoal(g)}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="welcome-panel-actions">
          {step === 1 ? (
            <button
              className="btn btn-primary"
              onClick={handleNext}
            >
              Get started
            </button>
          ) : step === 2 ? (
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!role}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={!goal}
              >
                Complete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

