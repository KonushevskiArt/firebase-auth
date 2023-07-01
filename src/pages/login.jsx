
import { Link } from "react-router-dom";
import { Login } from "../components/Login.jsx";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Or <Link to="/register">Register</Link>
      </p>
      login page
    </div>
  );
};
