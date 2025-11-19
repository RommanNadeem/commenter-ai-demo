"use client";

import { useState, useEffect } from "react";
import WelcomePanel from "@/components/app/WelcomePanel";
import OnboardingChecklist from "@/components/app/OnboardingChecklist";
import FeedModal from "@/components/app/FeedModal";
import { useOnboarding } from "@/contexts/OnboardingContext";

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

export default function AppPage() {
  const { onboarding, updateOnboarding, showLinkedInConnect, showICPDrawer } = useOnboarding();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showFeedModal, setShowFeedModal] = useState(false);

  // Always show welcome panel when landing in app (onboarding resets each time)
  useEffect(() => {
    // Reset welcome panel to show every time
    setShowWelcome(true);
  }, []);

  const handleWelcomeSave = (data: { role: string; goal: string; tags: string[] }) => {
    updateOnboarding({
      welcomeCompleted: true,
      userData: { ...onboarding.userData, ...data },
    });
    setShowWelcome(false);
  };

  const checklistItems = [
    {
      id: "linkedin",
      title: "Connect LinkedIn",
      description: "Pull your comments and DMs into Commenter AI",
      cta: "Connect",
      completed: onboarding.linkedInConnected,
      onClick: showLinkedInConnect,
    },
    {
      id: "icp",
      title: "Tell us who you want to talk to",
      description: "Set up your ICP feed to see relevant posts",
      cta: "Set ICP",
      completed: onboarding.icpSet,
      onClick: showICPDrawer,
    },
    {
      id: "comment",
      title: "Post your first smart comment",
      description: "Start a conversation with AI-assisted comments",
      cta: "Open feed",
      completed: onboarding.firstCommentPosted,
      onClick: () => {
        setShowFeedModal(true);
      },
    },
  ];

  const handlePostComment = () => {
    updateOnboarding({
      firstCommentPosted: true,
    });
  };

  return (
    <div className="app-page">
      {showWelcome && (
        <WelcomePanel onSave={handleWelcomeSave} />
      )}

      <FeedModal
        isOpen={showFeedModal}
        onClose={() => setShowFeedModal(false)}
        onPost={handlePostComment}
      />

      <div className="app-content">
        <OnboardingChecklist items={checklistItems} />

        {onboarding.linkedInConnected && onboarding.icpSet && (
          <div className="app-welcome-message">
            <h2>Welcome to Commenter AI</h2>
            <p>
              You're all set! Start by posting your first comment or check your inbox for warm threads.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

