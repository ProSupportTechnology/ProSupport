import { Header } from "../../components/Header";
import { StyledImageProfile } from "../../components/ImageProfile/style";
import photoProfile from "../../assets/photo-profile.png";
import {
  ProfileContainer,
  ProfileDiv,
  ProfileText,
  StyleMain,
  StyleProfile,
} from "./style";

export const Profile = () => {
  return (
    <StyleProfile>
      <Header />
      <StyleMain>
        <ProfileContainer>
          <ProfileDiv>
            <StyledImageProfile>
              <img src={photoProfile} alt="foto de perfil" />
            </StyledImageProfile>
            <ProfileText>
              <h2>Admin</h2>
              <span>Expert Monitor</span>
              <span>Status: online</span>
              <span>Email: admin@prosupport.com</span>
            </ProfileText>
          </ProfileDiv>
          <button>Editar Perfil</button>
        </ProfileContainer>
        <h1>Descrição</h1>
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
