import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../Redux/selectors/is-authenticated";
import { useDispatch } from "react-redux";
import { deconnexion } from "../Redux/Actions/ArgenBankActions";

//import { history } from "_helpers";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const userAuthenticated = useSelector(isAuthenticated);

  if (!userAuthenticated) {
    console.log("deconnecter");
    dispatch(deconnexion());
    // not logged in so redirect to login page with the return url
    return <Navigate to="/signIn" /*state={{ from: history.location }}*/ />;
  }

  // authorized so return child components
  return children;
}
