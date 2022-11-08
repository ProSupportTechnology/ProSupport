import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export const AuthRoutesAdm = () => {
  const token = localStorage.getItem("@Token-ProSupport");
  const { user } = useUserContext();

  if (token && !user.name) return null;

  return token && user.admin ? <Outlet /> : <Navigate to="/login" />;
};
