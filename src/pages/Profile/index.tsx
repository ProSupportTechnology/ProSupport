import { Header } from "../../components/Header";
import photoProfile from "../../assets/photo.png";
import { ProfileContainer, StyleMain, StyleProfile } from "./style";
import { StyledButton } from "../../style/button/style";
import { useUserContext } from "../../contexts/UserContext";
import { StyledAdminCard } from "../Dashboard/DashboardAdm/style";
import { ImageProfile } from "../../components/ImageProfile";
import { useQuestionContext } from "../../contexts/QuestionContext";
import { ModalEditProfile } from "../../components/Modal/ModalEditProfile";

export const Profile = () => {
  const { user } = useUserContext();
  const { email, name, admin, image } = user;

  const { isModEditProfile, setIsModEditProfile } = useQuestionContext();

  if (!user) return null;

  return (
    <StyleProfile>
      {isModEditProfile && <ModalEditProfile />}
      <Header />
      <StyleMain className="containerDash">
        <ProfileContainer>
          <StyledAdminCard>
            <ImageProfile>
              <img src={image ? image : photoProfile} alt="foto de perfil" />
              <button>Editar foto</button>
            </ImageProfile>
            <div className="userContent">
              <h1>{name}</h1>
              <span>{admin ? `Admin` : `Usuario`}</span>
              <span>{email}</span>
            </div>
          </StyledAdminCard>
          <StyledButton
            variant="theme-register-login"
            onClick={() => setIsModEditProfile(true)}
          >
            Editar Perfil
          </StyledButton>
        </ProfileContainer>
        <h1>Descrição:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </StyleMain>
    </StyleProfile>
  );
};
