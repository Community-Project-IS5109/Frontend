import { useState } from "react";

function Login({ demoCredentials }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const applyDemoCredentials = (credentials) => {
    setEmail(credentials.email);
    setPassword(credentials.password);
  };

  return (
    <section className="auth-card" aria-labelledby="login-title">
      <h1 id="login-title">Manager login</h1>
      <p className="auth-card__intro">
        Choose your role, then enter your account details.
      </p>
      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-section">
          <h2>1. Choose your role</h2>
          <label htmlFor="login-role">
            Role
            <select id="login-role" name="role" defaultValue="Manager">
              <option>CEO / Admin</option>
              <option>Manager</option>
              <option>Data-entry person</option>
            </select>
          </label>
          <p className="field-note">
            Options: CEO / Admin - Manager - Data-entry person
          </p>
          <p className="field-note">
            Choosing CEO / Admin does not grant access. Your account permissions
            decide what you can use.
          </p>
        </div>
        <div className="form-section">
          <h2>2. Log in</h2>
          <label htmlFor="email">
            Username or email
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="manager@foresthill.example"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <div className="form-actions">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(event) => setShowPassword(event.target.checked)}
              />
              Show password
            </label>
            <a href="/reset-password">Forgot password?</a>
          </div>
          <button type="submit">Log in</button>
        </div>
      </form>
      <aside className="demo-credentials" aria-labelledby="demo-title">
        <h2 id="demo-title">Demo credentials</h2>
        <p>Use either demo account to preview the login UI.</p>
        <div className="demo-credentials__list">
          {demoCredentials.map((credentials) => (
            <div className="demo-credentials__item" key={credentials.email}>
              <div>
                <strong>{credentials.label}</strong>
                <span>{credentials.email}</span>
                <span>{credentials.password}</span>
              </div>
              <button
                type="button"
                onClick={() => applyDemoCredentials(credentials)}
              >
                Use demo
              </button>
            </div>
          ))}
        </div>
      </aside>
      <p className="auth-card__footer">
        Need an account? <a href="/signup">Sign up</a>
      </p>
    </section>
  );
}

export default Login;
