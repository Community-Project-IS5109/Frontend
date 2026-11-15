function ResetPassword() {
  return (
    <section className="auth-card" aria-labelledby="reset-title">
      <a className="back-link" href="/">
        ← Back to login
      </a>
      <h1 id="reset-title">Reset password</h1>
      <p className="auth-card__intro">
        Enter your email and we will send you a reset link.
      </p>
      <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="reset-email">
          Email address
          <input
            id="reset-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <button type="submit">Send reset link</button>
      </form>
    </section>
  );
}

export default ResetPassword;
