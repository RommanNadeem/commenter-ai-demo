"use client";

import { useOnboarding } from "@/contexts/OnboardingContext";
import { useRouter } from "next/navigation";

export default function InboxPage() {
  const { onboarding, showLinkedInConnect } = useOnboarding();
  const router = useRouter();
  const hasThreads = false; // In real app, check if threads exist

  const handleEmptyStateClick = () => {
    if (!onboarding.linkedInConnected) {
      showLinkedInConnect();
    } else {
      router.push("/app/comments");
    }
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>Inbox</h1>
        <p>Handle every warm thread from comments and DMs in one place.</p>
      </div>

      <div className="inbox-content">
        <div className="inbox-threads">
          {hasThreads ? (
            <div className="thread-item">
              <div className="thread-header">
                <div className="thread-author">Sarah Chen</div>
                <span className="thread-badge">Looks like a lead</span>
              </div>
              <div className="thread-preview">
                "Thanks for the comment! I'd love to learn more about your solution."
              </div>
              <div className="thread-actions">
                <button className="btn btn-secondary btn-sm">Summarize</button>
                <button className="btn btn-secondary btn-sm">Suggest reply</button>
                <button className="btn btn-primary btn-sm">Mark as lead</button>
              </div>
            </div>
          ) : (
            <div 
              className="inbox-empty-state clickable-empty-state"
              onClick={handleEmptyStateClick}
            >
              <p>
                {!onboarding.linkedInConnected
                  ? "Connect LinkedIn to see your DMs and comment replies here."
                  : "No warm threads yet. Start commenting to see replies here."}
              </p>
              <button className="btn btn-primary btn-sm" onClick={handleEmptyStateClick}>
                {!onboarding.linkedInConnected 
                  ? "Connect LinkedIn"
                  : "Go to Comments"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

