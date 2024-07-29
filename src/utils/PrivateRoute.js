import { Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
    let { user } = useContext(AuthContext);
    // return user ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;