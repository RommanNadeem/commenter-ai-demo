"use client";

import { useState } from "react";

interface FeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: () => void;
}

export default function FeedModal({ isOpen, onClose, onPost }: FeedModalProps) {
  const [commentText, setCommentText] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  if (!isOpen) return null;

  const suggestedComment = "This is exactly the approach that works! Understanding pain points first creates genuine trust. What was the biggest challenge you faced in uncovering those pain points?";

  const handleUseSuggestion = () => {
    setCommentText(suggestedComment);
  };

  const handlePost = () => {
    setIsPosting(true);
    // Simulate posting
    setTimeout(() => {
      setIsPosting(false);
      onPost();
      onClose();
    }, 1000);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="feed-modal">
        <div className="feed-modal-header">
          <h2>Comment on Post</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="feed-modal-content">
          {/* LinkedIn Post */}
          <div className="linkedin-post-preview">
            <div className="post-header">
              <div className="post-author">
                <div className="post-avatar">SM</div>
                <div>
                  <div className="post-name">Sarah Martinez</div>
                  <div className="post-title">VP of Sales at GrowthCo</div>
                  <div className="post-time">2 hours ago</div>
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
            <div className="post-stats">
              <span>👍 24</span>
              <span>💬 8 comments</span>
            </div>
          </div>

          {/* AI Suggestion Box */}
          <div className="ai-suggestion-section">
            <div className="suggestion-header">
              <span>💡 AI Suggested Comment</span>
            </div>
            <div className="suggestion-content">
              <p>{suggestedComment}</p>
            </div>
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={handleUseSuggestion}
            >
              Use this suggestion
            </button>
          </div>

          {/* Comment Input */}
          <div className="comment-input-section">
            <label htmlFor="comment-input">Your Comment</label>
            <textarea
              id="comment-input"
              className="comment-textarea"
              placeholder="Write your comment here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={4}
            />
          </div>
        </div>

        <div className="feed-modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handlePost}
            disabled={!commentText.trim() || isPosting}
          >
            {isPosting ? "Posting..." : "Post Comment"}
          </button>
        </div>
      </div>
    </>
  );
}

