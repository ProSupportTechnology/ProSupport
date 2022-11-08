import { Navigate, Outlet } from "react-router-dom";

export const AuthRoutesAdm = () => {
  const token = localStorage.getItem("@Token-ProSupport");
  return token ? <Outlet /> : <Navigate to="/login" />;
};
