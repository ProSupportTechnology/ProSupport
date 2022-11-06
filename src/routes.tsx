import { Routes, Route, Navigate } from "react-router-dom"
import { AuthRoutes } from "./components/AuthRoutes"
import { AllUsersPage } from "./pages/AllUsersPage"
import { DashboardAdm } from "./pages/Dashboard/DashboardAdm"
import { LandingPage } from "./pages/LandingPage"
import { LoginPage } from "./pages/LoginPage"
import { Profile } from "./pages/Profile"
import { SignupPage } from "./pages/SignupPage"

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<AllUsersPage />} />
      <Route element={<AuthRoutes />}>
        <Route path="/dashboard" element={<DashboardAdm />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutesMain
