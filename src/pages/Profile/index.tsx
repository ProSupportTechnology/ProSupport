import { Header } from "../../components/Header"
import { StyledImageProfile, StyledImageQuestion } from "../../components/ImageProfile/style"
import photoProfile from "../../assets/photo.png"
import { ProfileContainer, ProfileDiv, ProfileText, StyleMain, StyleProfile } from "./style"
import { StyledButton } from "../../style/button/style"
import { useUserContext } from "../../contexts/UserContext"
import { StyledAdminCard } from "../Dashboard/DashboardAdm/style"

export const Profile = () => {
  const { user } = useUserContext()
  const { email, name } = user.user
  // Bio verificar na dashboard da Vih :D
  return (
    <StyleProfile>
      <Header />
      <StyleMain>
        <ProfileContainer>
          <StyledAdminCard>
            <StyledImageQuestion>
              <img src={user.user.image ? user.user.image : photoProfile} alt="foto de perfil" />
            </StyledImageQuestion>
            <div className="userContent">
              <h1>{user.user.name}</h1>
              <span>{user.user.admin ? `admin` : `usuario`}</span>
            </div>
          </StyledAdminCard>
          <StyledButton variant="theme-register-login">Editar Perfil</StyledButton>
        </ProfileContainer>
        <h1>Descrição:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l abore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </StyleMain>
    </StyleProfile>
  )
}
