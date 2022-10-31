import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "./components/AuthRoutes"
import { LandingPage } from "./pages/LandingPage"
import { LoginPage } from "./pages/LoginPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { Profile } from "./pages/Profile"
import { SignupPage } from "./pages/SignupPage"

export default function RoutesMain() {
   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route element={<AuthRoutes />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/profile" element={<Profile />} />
         </Route>

         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}
