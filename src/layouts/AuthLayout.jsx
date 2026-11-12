function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <aside className="auth-layout__aside">
        <a className="brand" href="/">IS5109</a>
        <div>
          <h1>Make every record count.</h1>
          <p>A focused workspace for keeping academic information clear, current, and useful.</p>
        </div>
      </aside>
      <main className="auth-layout__main">{children}</main>
    </div>
  )
}

export default AuthLayout