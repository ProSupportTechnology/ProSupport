import { Navigate, Outlet } from "react-router-dom";
import { QuestionProvider } from "../../contexts/QuestionContext";

export const AuthRoutes = () => {
  const token = localStorage.getItem("@Token-ProSupport");

  return token ? (
    <QuestionProvider>
      <Outlet />
    </QuestionProvider>
  ) : (
    <Navigate to="/login" />
  );
};
