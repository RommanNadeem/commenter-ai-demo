import { useState } from "react";
import { OnboardingData } from "@/types/onboarding";

interface Step4Props {
  onNext: () => void;
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export default function OnboardingStep4({ onNext, data, updateData }: Step4Props) {
  const [email, setEmail] = useState(data.email || "");
  const [password, setPassword] = useState(data.password || "");
  const [useEmail, setUseEmail] = useState(false);

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    updateData({ email, password });
    onNext();
  };

  const handleSocialSignup = (provider: string) => {
    // In a real app, this would trigger OAuth flow
    updateData({ email: `user@${provider}.com` });
    onNext();
  };

  return (
    <div className="onboarding-step">
      <div className="step-header">
        <h2>Create your account</h2>
        <p>We will save your settings and connect your channels next.</p>
      </div>

      <div className="auth-options">
        {!useEmail ? (
          <>
            <button 
              className="btn btn-social" 
              onClick={() => handleSocialSignup("google")}
            >
              Continue with Google
            </button>
            <button 
              className="btn btn-social" 
              onClick={() => handleSocialSignup("microsoft")}
            >
              Continue with Microsoft
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <button 
              className="btn btn-outline" 
              onClick={() => setUseEmail(true)}
            >
              Use email and password
            </button>
          </>
        ) : (
          <form onSubmit={handleEmailSignup} className="email-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>
            <button type="submit" className="btn">
              Create account
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

