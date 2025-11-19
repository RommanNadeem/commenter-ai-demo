"use client";

import { useOnboarding } from "@/contexts/OnboardingContext";
import { useRouter } from "next/navigation";

export default function PipelinePage() {
  const { onboarding, showLinkedInConnect } = useOnboarding();
  const router = useRouter();
  const hasLeads = false; // In real app, check if leads exist

  const handleEmptyStateClick = () => {
    if (!onboarding.linkedInConnected) {
      showLinkedInConnect();
    } else {
      router.push("/app/inbox");
    }
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>Pipeline</h1>
        <p>Track deals with engagement score and win probability.</p>
      </div>

      <div className="pipeline-content">
        <div className="pipeline-board">
          <div className="pipeline-column">
            <div className="column-header">New</div>
            {hasLeads ? (
              <div className="pipeline-leads">
                {/* Leads would go here */}
              </div>
            ) : (
              <div 
                className="pipeline-empty-state clickable-empty-state"
                onClick={handleEmptyStateClick}
              >
                <p>
                  {!onboarding.linkedInConnected
                    ? "Connect LinkedIn to start tracking leads from your conversations."
                    : "No leads yet. Mark a thread as a lead to see it here."}
                </p>
                <button className="btn btn-primary btn-sm" onClick={handleEmptyStateClick}>
                  {!onboarding.linkedInConnected 
                    ? "Connect LinkedIn"
                    : "Go to Inbox"}
                </button>
              </div>
            )}
          </div>
          <div className="pipeline-column">
            <div className="column-header">In Progress</div>
          </div>
          <div className="pipeline-column">
            <div className="column-header">Won</div>
          </div>
        </div>
      </div>
    </div>
  );
}

