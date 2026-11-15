import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="auth-card auth-card--signup"
      aria-labelledby="signup-title"
    >
      <a className="back-link" href="/">
        ← Back to login
      </a>
      <h1 id="signup-title">Create an account</h1>
      <p className="auth-card__intro">
        Set up your Forest Hill Tea dashboard account.
      </p>
      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="signup-name">
          Full name
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label htmlFor="signup-email">
          Email address
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@foresthill.example"
            required
          />
        </label>
        <label htmlFor="signup-role">
          Role
          <select id="signup-role" name="role" defaultValue="Manager">
            <option>Manager</option>
            <option>Data-entry person</option>
          </select>
        </label>
        <label htmlFor="signup-password">
          Password
          <input
            id="signup-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
          />
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(event) => setShowPassword(event.target.checked)}
          />
          Show password
        </label>
        <button type="submit">Create account</button>
      </form>
      <p className="auth-card__footer">
        Already have an account? <a href="/">Log in</a>
      </p>
    </section>
  );
}

export default Signup;
