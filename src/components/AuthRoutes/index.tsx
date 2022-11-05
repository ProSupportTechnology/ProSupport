import { Outlet, Navigate } from "react-router-dom"
import { UserProvider } from "../../contexts/UserContext"

export const AuthRoutes = () => {
  const token = window.localStorage.getItem("@Token-ProSupport")
  return (
    token ? (
      <UserProvider>
        <Outlet />
      </UserProvider>
    ) : (
      <Navigate to="/login"/>
    )
  )
}
