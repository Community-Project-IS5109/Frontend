import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import "./App.css";

function App() {
  const isResetPassword = window.location.pathname === "/reset-password";

  return (
    <AuthLayout>{isResetPassword ? <ResetPassword /> : <Login />}</AuthLayout>
  );
}

export default App;
