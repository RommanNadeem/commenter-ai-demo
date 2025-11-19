"use client";

import { useOnboarding } from "@/contexts/OnboardingContext";
import LinkedInConnect from "@/components/app/LinkedInConnect";
import ICPSetupDrawer from "@/components/app/ICPSetupDrawer";

export function OnboardingModals() {
  const {
    onboarding,
    updateOnboarding,
    isLinkedInModalOpen,
    isICPDrawerOpen,
    setShowLinkedInConnect,
    setShowICPDrawer,
  } = useOnboarding();

  const handleLinkedInConnect = () => {
    updateOnboarding({ linkedInConnected: true });
    setShowLinkedInConnect(false);
  };

  const handleLinkedInSkip = () => {
    setShowLinkedInConnect(false);
  };

  const handleICPSave = (data: { description: string; profiles: string[] }) => {
    updateOnboarding({
      icpSet: true,
      userData: {
        ...onboarding.userData,
        icpDescription: data.description,
        icpProfiles: data.profiles,
      },
    });
    setShowICPDrawer(false);
  };

  return (
    <>
      {isLinkedInModalOpen && (
        <LinkedInConnect
          onConnect={handleLinkedInConnect}
          onSkip={handleLinkedInSkip}
        />
      )}

      {isICPDrawerOpen && (
        <ICPSetupDrawer
          isOpen={isICPDrawerOpen}
          onClose={() => setShowICPDrawer(false)}
          onSave={handleICPSave}
        />
      )}
    </>
  );
}

