<<<<<<< HEAD
import { Profile } from "../../pages/Profile";

export const AuthRoutes = () => {
  return (
    <div>
      <Profile/>
    </div>
  );
};
=======
import { Outlet, Navigate } from "react-router-dom"
import { QuestionProvider } from "../../contexts/QuestionContext"

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
>>>>>>> 2c046015fb296b74a09b0801156ce3ac1b252553
