import { FunctionComponent, ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  isLoggedIn,
}): ReactElement => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
