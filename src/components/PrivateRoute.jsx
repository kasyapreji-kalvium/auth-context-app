import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  return isAuthenticated ? children : <Navigate to="/" />;
}