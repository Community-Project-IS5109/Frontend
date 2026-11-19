import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import Signup from "./pages/auth/Signup";
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
