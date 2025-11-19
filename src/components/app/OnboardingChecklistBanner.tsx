"use client";

import { useOnboarding } from "@/contexts/OnboardingContext";
import { usePathname } from "next/navigation";

export function OnboardingChecklistBanner() {
  const { onboarding, showLinkedInConnect, showICPDrawer } = useOnboarding();
  const pathname = usePathname();
  
  // Don't show on the main app page (it has the full checklist)
  if (pathname === "/app") {
    return null;
  }

  // Check if all steps are completed
  const allCompleted = 
    onboarding.linkedInConnected && 
    onboarding.icpSet && 
    onboarding.firstCommentPosted;

  // Don't show if all steps are completed
  if (allCompleted) {
    return null;
  }

  const checklistItems = [
    {
      id: "linkedin",
      title: "Connect LinkedIn",
      completed: onboarding.linkedInConnected,
      onClick: showLinkedInConnect,
    },
    {
      id: "icp",
      title: "Set up ICP",
      completed: onboarding.icpSet,
      onClick: showICPDrawer,
    },
    {
      id: "comment",
      title: "Post first comment",
      completed: onboarding.firstCommentPosted,
      onClick: () => {
        window.location.href = "/app/comments";
      },
    },
  ];

  const completedCount = checklistItems.filter((item) => item.completed).length;
  const nextIncompleteItem = checklistItems.find((item) => !item.completed);

  return (
    <div className="onboarding-checklist-banner">
      <div className="checklist-banner-content">
        <div className="checklist-banner-left">
          <span className="checklist-banner-progress">
            {completedCount}/{checklistItems.length} steps complete
          </span>
          <span className="checklist-banner-next">
            {nextIncompleteItem 
              ? `Next: ${nextIncompleteItem.title}`
              : "All steps complete!"}
          </span>
        </div>
        {nextIncompleteItem && (
          <button
            className="btn btn-primary btn-sm"
            onClick={nextIncompleteItem.onClick}
          >
            {nextIncompleteItem.title}
          </button>
        )}
      </div>
    </div>
  );
}

