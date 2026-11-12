function Login() {
  return (
    <section className="auth-card" aria-labelledby="login-title">
      <h2 id="login-title">Welcome back</h2>
      <p className="auth-card__intro">Sign in to continue to your workspace.</p>
      <form className="auth-form">
        <label htmlFor="email">
          Email address
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
      <a className="auth-card__link" href="/reset-password">
        Forgot your password?
      </a>
    </section>
  );
}

export default Login;
