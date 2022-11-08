import { Navigate, Outlet } from "react-router-dom";

export const AuthRoutesUser = () => {
  const token = localStorage.getItem("@Token-ProSupport");
  return token ? <Outlet /> : <Navigate to="/login" />;
};
