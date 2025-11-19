"use client";

import AppLayout from "@/components/app/AppLayout";
import { OnboardingProvider } from "@/contexts/OnboardingContext";
import { OnboardingModals } from "@/components/app/OnboardingModals";
import { OnboardingChecklistBanner } from "@/components/app/OnboardingChecklistBanner";

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OnboardingProvider>
      <AppLayout>
        <OnboardingModals />
        <OnboardingChecklistBanner />
        {children}
      </AppLayout>
    </OnboardingProvider>
  );
}

