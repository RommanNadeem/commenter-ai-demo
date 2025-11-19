"use client";

import SignupStep from "@/components/onboarding/SignupStep";

export default function OnboardingPage() {
  return (
    <div className="onboarding-page">
      <div className="onboarding-container">
        <div className="onboarding-content">
          <SignupStep />
        </div>
      </div>
    </div>
  );
}

