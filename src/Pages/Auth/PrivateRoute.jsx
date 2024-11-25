import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { token } = useUser();
  console.log(token);
  const isAuthenticated = token;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
