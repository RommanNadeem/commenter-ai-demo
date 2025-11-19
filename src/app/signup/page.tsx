const socialProviders = [
  "Continue with LinkedIn",
  "Continue with Google",
];

export default function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-layout">
        <div className="auth-info">
          <p className="pill">Start free</p>
          <h1>Create your account</h1>
          <p>Connect LinkedIn, post a few comments, and get your first lead in 7 days. No credit card required.</p>
        </div>
        <div className="auth-panel">
          <div className="auth-social">
            {socialProviders.map((provider) => (
              <button className="btn btn-secondary" key={provider} type="button">
                {provider}
              </button>
            ))}
          </div>
          <div className="divider">
            <span>or continue with email</span>
          </div>
          <form className="auth-form">
            <label htmlFor="signup-name">Name</label>
            <input id="signup-name" type="text" placeholder="Alex Revenue" />
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" placeholder="you@company.com" />
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" placeholder="••••••••" />
            <button className="btn btn-primary" type="button">Start 7 Day Trial</button>
            <p className="micro-text">By continuing you agree to our Terms & Privacy.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
