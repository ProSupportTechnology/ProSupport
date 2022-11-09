import { Header } from "../../components/Header";
import photoProfile from "../../assets/photo.png";
import { ProfileContainer, StyleMain, StyleProfile } from "./style";
import { StyledButton } from "../../style/button/style";
import { useUserContext } from "../../contexts/UserContext";
import { StyledAdminCard } from "../Dashboard/DashboardAdm/style";
import { ImageProfile } from "../../components/ImageProfile";
import { useQuestionContext } from "../../contexts/QuestionContext";

export const Profile = () => {
  const { user } = useUserContext();
  const { email, name, admin, image, bio } = user;

  const { setIsModEditProfile } = useQuestionContext();

  if (!user) return null;

  return (
    <StyleProfile>
      <Header />
      <StyleMain className="containerDash">
        <ProfileContainer>
          <StyledAdminCard>
            <ImageProfile>
              <img src={image ? image : photoProfile} alt="foto de perfil" />
              <button>Editar foto</button>
            </ImageProfile>
            <div className="userContent">
              <h1 className="title one">{name}</h1>
              <span className="text one">{admin ? `Admin` : `Usuario`}</span>
              <span className="text one">{email}</span>
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
        <p>{bio}</p>
      </StyleMain>
    </StyleProfile>
  );
};
