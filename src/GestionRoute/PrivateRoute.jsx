import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

//import { history } from "_helpers";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.token);
  if (!token && !localStorage.getItem("token")) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/signIn" /*state={{ from: history.location }}*/ />;
  }

  // authorized so return child components
  return children;
}
