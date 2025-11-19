"use client";

import { useOnboarding } from "@/contexts/OnboardingContext";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { onboarding, showLinkedInConnect, showICPDrawer } = useOnboarding();
  const router = useRouter();
  const hasData = onboarding.linkedInConnected && onboarding.firstCommentPosted;

  const handleEmptyStateClick = () => {
    if (!onboarding.linkedInConnected) {
      showLinkedInConnect();
    } else if (!onboarding.icpSet) {
      showICPDrawer();
    } else {
      router.push("/app/comments");
    }
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>See what your LinkedIn activity produced and what to do next.</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-metrics">
          <div className="metric-card">
            <div className="metric-label">New Leads</div>
            <div className="metric-value">0</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Comments This Week</div>
            <div className="metric-value">0</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">DM Reply Rate</div>
            <div className="metric-value">—</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Sales From LinkedIn</div>
            <div className="metric-value">$0</div>
          </div>
        </div>

        {!hasData && (
          <div 
            className="dashboard-empty-state clickable-empty-state"
            onClick={handleEmptyStateClick}
          >
            <p>
              {!onboarding.linkedInConnected
                ? "Connect LinkedIn to see your metrics here."
                : !onboarding.icpSet
                ? "Set up your ICP feed and start commenting to see your metrics."
                : "Start commenting to see your metrics here."}
            </p>
            <button className="btn btn-primary btn-sm" onClick={handleEmptyStateClick}>
              {!onboarding.linkedInConnected 
                ? "Connect LinkedIn"
                : !onboarding.icpSet
                ? "Set up ICP"
                : "Go to Comments"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
