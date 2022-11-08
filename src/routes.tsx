import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutesAdm } from "./components/AuthRoutesAdm";
import { AuthRoutesUser } from "./components/AuthRoutesUser";
import { Loading } from "./components/Loading";
import { useUserContext } from "./contexts/UserContext";
import { AllUsersPage } from "./pages/AllUsersPage";
import { AnsweredQuestions } from "./pages/AnsweredQuestions";
import { DashboardAdm } from "./pages/Dashboard/DashboardAdm";
import { DashboardUser } from "./pages/Dashboard/DashboardUser";
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
        <Route element={<AuthRoutesAdm />}>
          <Route path="/dashboard" element={<DashboardAdm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<AllUsersPage />} />
          <Route path="/answeredQuestions" element={<AnsweredQuestions />} />
        </Route>
        <Route element={<AuthRoutesUser />}>
          <Route path="/dashboard" element={<DashboardUser />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
