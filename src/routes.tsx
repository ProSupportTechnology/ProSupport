import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./components/AuthRoutes";
import { Loading } from "./components/Loading";
import { useUserContext } from "./contexts/UserContext";
import { AnsweredQuestions } from "./pages/AnsweredQuestions";
import { DashboardAdm } from "./pages/Dashboard/DashboardAdm";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { Profile } from "./pages/Profile";
import { SignupPage } from "./pages/SignupPage";

const RoutesMain = () => {
  const { loading } = useUserContext();
  return (
    <>
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AuthRoutes />}>
          <Route path="/dashboard" element={<DashboardAdm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/answeredQuestions" element={<AnsweredQuestions />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
