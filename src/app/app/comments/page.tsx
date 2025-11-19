"use client";

import { useState } from "react";
import { useOnboarding } from "@/contexts/OnboardingContext";

export default function CommentsPage() {
  const { onboarding, showICPDrawer, showLinkedInConnect } = useOnboarding();
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestedComment, setSuggestedComment] = useState("");
  
  // Show example post if LinkedIn is connected and ICP is set, but no real posts yet
  const showExamplePost = onboarding.linkedInConnected && onboarding.icpSet;

  const handleEmptyStateClick = () => {
    if (!onboarding.linkedInConnected) {
      showLinkedInConnect();
    } else if (!onboarding.icpSet) {
      showICPDrawer();
    }
  };

  const handleGetSuggestion = () => {
    // Generate example comment suggestion
    setSuggestedComment("This is exactly the approach that works! Understanding pain points first creates genuine trust. What was the biggest challenge you faced in uncovering those pain points?");
    setShowSuggestion(true);
  };

  return (
    <div className="app-page">
      <div className="page-header">
        <h1>Comments</h1>
        <p>See posts from your ideal buyers and get AI comments in your voice.</p>
      </div>

      <div className="comments-content">
        <div className="comments-feed">
          {showExamplePost ? (
            <div className="feed-post">
              <div className="post-header">
                <div className="post-author">
                  <div className="post-avatar">SM</div>
                  <div>
                    <div className="post-name">Sarah Martinez</div>
                    <div className="post-title">VP of Sales at GrowthCo</div>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p>
                  Just closed our biggest deal this quarter! The key was focusing on
                  understanding the customer's pain points before pitching. When you lead with empathy,
                  the sale follows naturally.
                </p>
              </div>
              <div className="post-actions">
                {!showSuggestion ? (
                  <button className="btn btn-primary" onClick={handleGetSuggestion}>
                    💬 Get AI comment suggestion
                  </button>
                ) : (
                  <div className="comment-suggestion-box">
                    <div className="suggestion-header">
                      <span>💡 Suggested Comment</span>
                      <button 
                        className="btn-link-small" 
                        onClick={() => setShowSuggestion(false)}
                      >
                        Hide
                      </button>
                    </div>
                    <div className="suggestion-content">
                      <p>{suggestedComment}</p>
                    </div>
                    <div className="suggestion-actions">
                      <button className="btn btn-secondary btn-sm">Edit</button>
                      <button className="btn btn-primary btn-sm">Copy</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div 
              className="feed-empty-state clickable-empty-state"
              onClick={handleEmptyStateClick}
            >
              <p>
                {!onboarding.linkedInConnected 
                  ? "Connect LinkedIn to see posts from your ideal buyers."
                  : !onboarding.icpSet
                  ? "Set up your ICP feed to see relevant posts."
                  : "No posts match your ICP yet. Set up your ICP feed to see relevant posts."}
              </p>
              <button className="btn btn-primary btn-sm" onClick={handleEmptyStateClick}>
                {!onboarding.linkedInConnected 
                  ? "Connect LinkedIn"
                  : "Set up ICP feed"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

