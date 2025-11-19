"use client";

import { useState } from "react";

interface LinkedInConnectProps {
  onConnect: () => void;
  onSkip: () => void;
}

export default function LinkedInConnect({ onConnect, onSkip }: LinkedInConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Placeholder: In real app, this would trigger LinkedIn OAuth
    setTimeout(() => {
      setIsConnecting(false);
      onConnect();
    }, 1500);
  };

  return (
    <div className="linkedin-connect-overlay">
      <div className="linkedin-connect-modal">
        <div className="linkedin-connect-content">
          <div className="linkedin-connect-left">
            <h2>Connect LinkedIn</h2>
            <p>
              Connect your LinkedIn account to pull your comments and DMs into Commenter AI.
            </p>
            <div className="linkedin-trust-bullets">
              <div className="trust-bullet">
                <span>✓</span>
                <span>We only read your posts, comments, and DMs</span>
              </div>
              <div className="trust-bullet">
                <span>✓</span>
                <span>We never post or send messages on your behalf</span>
              </div>
              <div className="trust-bullet">
                <span>✓</span>
                <span>You can disconnect anytime</span>
              </div>
            </div>
          </div>

          <div className="linkedin-connect-right">
            <h3>What you'll get in the next 7 days</h3>
            <ul className="linkedin-benefits">
              <li>See which comments and DMs create leads</li>
              <li>Your first tracked lead on a simple pipeline board</li>
              <li>AI suggestions for comments and replies</li>
              <li>Unified inbox for all warm threads</li>
            </ul>
          </div>
        </div>

        <div className="linkedin-connect-actions">
          <button className="btn btn-link" onClick={onSkip}>
            Skip for now
          </button>
          <button
            className="btn btn-primary"
            onClick={handleConnect}
            disabled={isConnecting}
          >
            {isConnecting ? "Connecting..." : "Connect LinkedIn"}
          </button>
        </div>
      </div>
    </div>
  );
}

