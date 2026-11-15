import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
            Options: CEO / Admin · Manager · Data-entry person
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
      <p className="auth-card__footer">
        Need an account? <a href="/signup">Sign up</a>
      </p>
    </section>
  );
}

export default Login;
