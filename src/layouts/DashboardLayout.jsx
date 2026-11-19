const navigationGroups = [
  {
    label: "Overview",
    links: [{ label: "Executive dashboard", href: "/dashboard" }],
  },
  {
    label: "Analytics",
    links: [
      { label: "Tea production", href: "/dashboard/production" },
      { label: "Future estimates", href: "/dashboard/forecasts" },
      { label: "Sales and markets", href: "/dashboard/sales" },
      { label: "Community and environment", href: "/dashboard/community" },
      { label: "Employment", href: "/dashboard/employment" },
      { label: "Reports", href: "/dashboard/reports" },
    ],
  },
  {
    label: "Data entry",
    links: [
      { label: "Production", href: "/dashboard/data-entry/production" },
      { label: "Farmers", href: "/dashboard/data-entry/farmer" },
      { label: "Employees", href: "/dashboard/data-entry/employee" },
      { label: "Sales", href: "/dashboard/data-entry/sales" },
    ],
  },
  {
    label: "Administration",
    links: [{ label: "User accounts", href: "/dashboard/admin/users" }],
  },
];

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <a className="dashboard-brand" href="/dashboard">
          Forest Hill Tea
        </a>
        <p className="dashboard-sidebar__caption">Operations dashboard</p>
        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          {navigationGroups.map((group) => (
            <div className="dashboard-nav__group" key={group.label}>
              <p>{group.label}</p>
              {group.links.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <a className="dashboard-logout" href="/">
          Log out
        </a>
      </aside>
      <main className="dashboard-content">{children}</main>
    </div>
  );
}

export default DashboardLayout;
