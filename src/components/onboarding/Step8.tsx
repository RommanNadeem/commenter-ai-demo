interface Step8Props {
  onNext: () => void;
}

export default function OnboardingStep8({ onNext }: Step8Props) {
  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Your ICP feed</h2>
        <p className="progress-text">Step 1 of 3 - Post one smart comment to start a conversation.</p>
      </div>

      <div className="feed-preview">
        <div className="feed-post highlighted">
          <div className="post-header">
            <div className="post-avatar"></div>
            <div>
              <strong>Sarah Chen</strong>
              <span>VP Sales @ TechCorp • 2h</span>
            </div>
          </div>
          <div className="post-content">
            <p>Looking for a better way to track LinkedIn conversations and turn them into pipeline. What tools are you using?</p>
          </div>
          <div className="ai-comment-suggestion">
            <div className="suggestion-header">
              <span className="ai-badge">AI Comment Suggestion</span>
            </div>
            <div className="suggestion-content">
              <p>"We use Commenter AI to track every conversation from comment to DM to pipeline. It's been a game-changer for our team. Happy to share how we set it up if helpful!"</p>
            </div>
          </div>
        </div>

        <div className="feed-post">
          <div className="post-header">
            <div className="post-avatar"></div>
            <div>
              <strong>Mike Johnson</strong>
              <span>Founder @ StartupXYZ • 5h</span>
            </div>
          </div>
          <div className="post-content">
            <p>Just closed our first enterprise deal through LinkedIn. The key was consistent engagement...</p>
          </div>
        </div>
      </div>

      <div className="step-actions">
        <button className="btn" onClick={onNext}>
          Edit and post
        </button>
        <button className="btn-text" onClick={onNext}>
          Try another suggestion
        </button>
      </div>
    </div>
  );
}

