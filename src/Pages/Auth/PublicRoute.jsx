import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const PublicRoute = ({ element }) => {
  const { token } = useUser();
  console.log(token);
  const isAuthenticated = token;
  return isAuthenticated ? <Navigate to="/" replace /> : element;
};

export default PublicRoute;
