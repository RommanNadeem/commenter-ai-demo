interface Step9Props {
  onNext: () => void;
}

const hasDMs = true; // In real app, this would check actual data

export default function OnboardingStep9({ onNext }: Step9Props) {
  if (!hasDMs) {
    return (
      <div className="onboarding-step">
        <div className="step-header">
          <h2>Your unified inbox</h2>
          <p className="progress-text">Step 2 of 3 - Use AI to move one conversation forward.</p>
        </div>

        <div className="empty-state">
          <div className="empty-icon">💬</div>
          <h3>No conversations yet</h3>
          <p>Go back to feed and comment more to start conversations.</p>
          <button className="btn" onClick={onNext}>
            Go back to feed
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Your unified inbox</h2>
        <p className="progress-text">Step 2 of 3 - Use AI to move one conversation forward.</p>
      </div>

      <div className="inbox-preview">
        <div className="dm-thread highlighted">
          <div className="thread-header">
            <div className="thread-avatar"></div>
            <div>
              <strong>Sarah Chen</strong>
              <span>VP Sales @ TechCorp</span>
            </div>
          </div>
          <div className="thread-messages">
            <div className="message received">
              <p>Thanks for the comment! I'd love to learn more about how you're tracking conversations.</p>
              <span className="message-time">2h ago</span>
            </div>
          </div>
          <div className="thread-actions">
            <button className="btn btn-small">Summarize this thread</button>
            <button className="btn btn-small btn-outline">Suggest reply</button>
          </div>
        </div>

        <div className="dm-thread">
          <div className="thread-header">
            <div className="thread-avatar"></div>
            <div>
              <strong>Mike Johnson</strong>
              <span>Founder @ StartupXYZ</span>
            </div>
          </div>
          <div className="thread-messages">
            <div className="message sent">
              <p>Great to connect! Let me know if you want to chat.</p>
              <span className="message-time">1d ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="step-actions">
        <button className="btn" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}

