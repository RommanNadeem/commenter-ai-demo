"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface OnboardingState {
  welcomeCompleted: boolean;
  linkedInConnected: boolean;
  icpSet: boolean;
  firstCommentPosted: boolean;
  firstLeadCreated: boolean;
  userData: {
    role?: string;
    goal?: string;
    tags?: string[];
    icpDescription?: string;
    icpProfiles?: string[];
  };
}

interface OnboardingContextType {
  onboarding: OnboardingState;
  updateOnboarding: (updates: Partial<OnboardingState>) => void;
  showLinkedInConnect: () => void;
  showICPDrawer: () => void;
  setShowLinkedInConnect: (show: boolean) => void;
  setShowICPDrawer: (show: boolean) => void;
  isLinkedInModalOpen: boolean;
  isICPDrawerOpen: boolean;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [onboarding, setOnboarding] = useState<OnboardingState>({
    welcomeCompleted: false,
    linkedInConnected: false,
    icpSet: false,
    firstCommentPosted: false,
    firstLeadCreated: false,
    userData: {},
  });

  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);
  const [isICPDrawerOpen, setIsICPDrawerOpen] = useState(false);

  // Reset onboarding state every time user lands in app
  useEffect(() => {
    // Clear any saved onboarding state to reset the flow
    localStorage.removeItem("onboarding_state");
    // Start with fresh onboarding state
    setOnboarding({
      welcomeCompleted: false,
      linkedInConnected: false,
      icpSet: false,
      firstCommentPosted: false,
      firstLeadCreated: false,
      userData: {},
    });
  }, []);

  // Save onboarding state to localStorage
  const updateOnboarding = (updates: Partial<OnboardingState>) => {
    const updated = { ...onboarding, ...updates };
    setOnboarding(updated);
    localStorage.setItem("onboarding_state", JSON.stringify(updated));
  };

  const showLinkedInConnect = () => setIsLinkedInModalOpen(true);
  const showICPDrawer = () => setIsICPDrawerOpen(true);

  return (
    <OnboardingContext.Provider
      value={{
        onboarding,
        updateOnboarding,
        showLinkedInConnect,
        showICPDrawer,
        setShowLinkedInConnect: setIsLinkedInModalOpen,
        setShowICPDrawer: setIsICPDrawerOpen,
        isLinkedInModalOpen,
        isICPDrawerOpen,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}

