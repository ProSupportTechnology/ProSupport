import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./components/AuthRoutes";
import { Loading } from "./components/Loading";
import { ModalCreateQuestion } from "./components/Modal/ModalCreateQuestion";
import { ModalCreateResponse } from "./components/Modal/ModalCreateResponse";
import { ModalDeleteQuestion } from "./components/Modal/ModalDeleteQuestion";
import { ModalDeleteResponse } from "./components/Modal/ModalDeleteResponse";
import { ModalDeleteUser } from "./components/Modal/ModalDeleteUser";
import { ModalEditProfile } from "./components/Modal/ModalEditProfile";
import { ModalEditResponse } from "./components/Modal/ModalEditResponse";
import { useQuestionContext } from "./contexts/QuestionContext";
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
  const { loading, user } = useUserContext();
  const {
    isModCreateRespOpen,
    isModDeleteQuestOpen,
    isModDeleteUser,
    isModEditRespOpen,
    isModDeleteRespOpen,
    isModEditProfile,
    isModCreateQuestOpen,
  } = useQuestionContext();
  return (
    <>
      {loading && <Loading />}
      {isModCreateRespOpen && <ModalCreateResponse />}
      {isModDeleteQuestOpen && <ModalDeleteQuestion />}
      {isModDeleteUser && <ModalDeleteUser />}
      {isModEditRespOpen && <ModalEditResponse />}
      {isModDeleteRespOpen && <ModalDeleteResponse />}
      {isModEditProfile && <ModalEditProfile />}
      {isModCreateQuestOpen && <ModalCreateQuestion />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AuthRoutes />}>
          <Route path="/dashboard" element={user.admin ? <DashboardAdm /> : <DashboardUser />} />
          <Route path="/users" element={user.admin && <AllUsersPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/answeredQuestions" element={user.admin && <AnsweredQuestions />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
