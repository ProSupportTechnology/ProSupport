import { Navigate, Outlet } from "react-router-dom";
import { QuestionProvider } from "../../contexts/QuestionContext";

export const AuthRoutes = () => {
  const token = window.localStorage.getItem("@Token-ProSupport")
  return (
    token ? (
      <QuestionProvider>
        <Outlet />
      </QuestionProvider>
    ) : (
      <Navigate to="/login"/>
    )
  )
}
