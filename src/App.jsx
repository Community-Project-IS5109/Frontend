import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import Signup from "./pages/auth/Signup";
import "./App.css";

function App() {
  const path = window.location.pathname;
  const page =
    path === "/reset-password" ? (
      <ResetPassword />
    ) : path === "/signup" ? (
      <Signup />
    ) : (
      <Login />
    );

  return <AuthLayout>{page}</AuthLayout>;
}

export default App;
