import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-layout">
        <div className="auth-info">
          <p className="pill">Welcome back</p>
          <h1>Log in to Commenter AI</h1>
          <p>Pick up where you left off. Today’s plan is waiting with the leads you need to move.</p>
        </div>
        <div className="auth-panel">
          <form className="auth-form">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="email" placeholder="you@company.com" />
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" placeholder="••••••••" />
            <button className="btn btn-primary" type="button">Log in</button>
          </form>
          <div className="auth-footer">
            <Link href="#">Forgot password?</Link>
            <p>
              New here? <Link href="/signup">Start 7 Day Trial</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
