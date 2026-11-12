function ResetPassword() {
  return (
    <section className="auth-card" aria-labelledby="reset-title">
      <h2 id="reset-title">Reset password</h2>
      <p className="auth-card__intro">
        Enter your email and we will send you a reset link.
      </p>
      <form className="auth-form">
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
      <a className="auth-card__link" href="/">
        Back to sign in
      </a>
    </section>
  );
}

export default ResetPassword;
