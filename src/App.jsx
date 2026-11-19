import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import Signup from "./pages/auth/Signup";
import ExecutiveDashboard from "./pages/dashboards/ExecutiveDashboard";
import FutureEstimates from "./pages/dashboards/FutureEstimates";
import TeaProduction from "./pages/dashboards/TeaProduction";
import UserAccounts from "./pages/admin/UserAccounts";
import EmployeeEntry from "./pages/data-entry/EmployeeEntry";
import FarmerEntry from "./pages/data-entry/FarmerEntry";
import ProductionEntry from "./pages/data-entry/ProductionEntry";
import SalesEntry from "./pages/data-entry/SalesEntry";
import Reports from "./pages/reports/Reports";
import "./App.css";

const demoCredentials = [
  {
    label: "Manager demo",
    email: "manager.demo@foresthill.example",
    password: "ManagerDemo123!",
  },
  {
    label: "Admin demo",
    email: "admin.demo@foresthill.example",
    password: "AdminDemo123!",
  },
];

function App() {
  const path = window.location.pathname;

  const dashboardPages = {
    "/dashboard": <ExecutiveDashboard />,
    "/dashboard/production": <TeaProduction />,
    "/dashboard/forecasts": <FutureEstimates />,
    "/dashboard/reports": <Reports />,
    "/dashboard/community": <ComingSoonPage />,
    "/dashboard/employment": <ComingSoonPage />,
    "/dashboard/sales": <ComingSoonPage />,
    "/dashboard/data-entry/production": <ProductionEntry />,
    "/dashboard/data-entry/farmer": <FarmerEntry />,
    "/dashboard/data-entry/employee": <EmployeeEntry />,
    "/dashboard/data-entry/sales": <SalesEntry />,
    "/dashboard/admin/users": <UserAccounts />,
  };

  if (path.startsWith("/dashboard")) {
    return (
      <DashboardLayout>
        {dashboardPages[path] || <ComingSoonPage />}
      </DashboardLayout>
    );
  }

  const page =
    path === "/reset-password" ? (
      <ResetPassword />
    ) : path === "/signup" ? (
      <Signup />
    ) : (
      <Login demoCredentials={demoCredentials} />
    );

  return <AuthLayout>{page}</AuthLayout>;
}

export default App;

function ComingSoonPage() {
  return (
    <section className="dashboard-placeholder">
      <p className="dashboard-placeholder__eyebrow">Forest Hill Tea</p>
      <h1>This dashboard view is ready for content.</h1>
      <p>
        The route is connected. Add the page design and data here when this
        section is ready.
      </p>
    </section>
  );
}
