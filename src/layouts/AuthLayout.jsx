function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <header className="auth-header">
        <a className="brand" href="/" aria-label="Forest Hill Tea home">
          Forest Hill Tea
        </a>
        <p>Smart dashboard &amp; predictive analytics</p>
      </header>
      <main className="auth-layout__main">{children}</main>
    </div>
  );
}

export default AuthLayout;
