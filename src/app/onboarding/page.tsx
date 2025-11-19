"use client";

import { Suspense } from "react";
import SignupStep from "@/components/onboarding/SignupStep";

export default function OnboardingPage() {
  return (
    <div className="onboarding-page">
      <div className="onboarding-container">
        <div className="onboarding-content">
          <Suspense fallback={<div>Loading...</div>}>
            <SignupStep />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

